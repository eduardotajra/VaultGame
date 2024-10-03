import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import axios from "axios"; // Importa o Axios
import styles from "./Cadastro.module.css";
import olhoFechado from "./img/olho_fechado.png";
import olho from "./img/olho.png";

function Cadastro() {
  useEffect(() => {
    ScrollReveal().reveal("#home", {
      origin: "top",
      distance: "0px",
      duration: 1000,
      reset: false,
    });
  }, []);

  const location = useLocation();
  const [pagina, setPagina] = useState(location.state);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [nome, setNome] = useState(""); // cria a variavel de nome vazia que dps é setada pelo setNome no <input> de nome
  const [email, setEmail] = useState(""); // cria a variavel email vazia que dps é setada pelo setEmail no <input> de email
  const [senha, setSenha] = useState(""); // cria a variavel senha vazia que dps é setada pelo setSenha no <input> de senha
  const [mensagem, setMensagem] = useState(""); // mostrar uma mensagem se o usuário se cadastrou ou não

  useEffect(() => {
    setPagina(location.state);
  }, [location.state]);

  const alterarPagina = (novaPagina) => {
    setPagina(novaPagina);
  };

  const togglePasswordVisibility = () => {
    setMostrarSenha((prevMostrar) => !prevMostrar);
  };

  // Função para lidar com o cadastro
  const handleCadastro = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/users/create/", {
        username: nome,
        email: email,
        full_name: nome,
        password: senha,
      });
  
      setMensagem("Usuário cadastrado com sucesso!");
      console.log("Dados enviados:", response.data);
    } catch (error) { // tratamento de erro que diz na mensagem de baixo que erro aconteceu 
      if (error.response) {
        
        console.error("Erro no cadastro:", error.response.data);
      } else {
        console.error("Erro desconhecido:", error.message);
      }
    }
  };

  return (
    <>
      <div id="home" className={styles.home}>
        <div id="form-header" className={styles.header}>

          <button id="loginBtn" className={`${styles.botaoDiv} ${ pagina === "login" ? styles.botaoDivOn : "" }`} onClick={() => alterarPagina("login")}> Login </button>
          <button id="cadastroBtn" className={`${styles.botaoDiv} ${ pagina === "cadastro" ? styles.botaoDivOn : "" }`} onClick={() => alterarPagina("cadastro")}> <u>Cadastro</u> </button>
        
        </div>

        <div id="form-container" className={styles.box}>
          {pagina === "login" ? (
            <section className={styles.sessaoLogin} id="login">

              <input type="email" id="email" placeholder="Email" required />
              <br /> <br />

              <div className={styles.passwordContainer}>
                <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" required/>

                <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                  <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder" />
                </span>

              </div>

              <br />
              <button type="button" className={styles.botao}> Entrar </button>
              <br /> <br />

              <div className={styles.esqueceuasenha}>

                <Link to="/esqueceu-senha">
                  <a href="#esqueceu"> Esqueceu a Senha? </a>
                </Link>

              </div>
            </section>

          ) : (

            <section className={styles.sessaoCadastro} id="cadastro">

              <input type="text" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
              <br /> <br />

              <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

              <br /> <br />

              <div className={styles.passwordContainer}>

                <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

                <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                  <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder"/>
                </span>

              </div>

              <br />

              <button type="button" className={styles.botao} onClick={handleCadastro}> Cadastrar </button>

              {mensagem && <p><br/><br/><br/>{mensagem}</p>}
            </section>
          )}

        </div>

      </div>

    </>
  );
}

export default Cadastro;
