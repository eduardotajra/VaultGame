import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import axios from "axios"; // Importa o Axios
import styles from "./Cadastro.module.css";
import olhoFechado from "./img/olho_fechado.png";
import olho from "./img/olho.png";

function Cadastro() {
  //Animação
  useEffect(() => {
    ScrollReveal().reveal("#home", {
      origin: "top",
      distance: "0px",
      duration: 1000,
      reset: false,
    });
  }, []);

  //Declaração das variáveis
  const location = useLocation();
  const [pagina, setPagina] = useState(location.state);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [formDado, setFormDado] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [erro, setErro] = useState({});
  const [mensagem, setMensagem] = useState("");

  //Muda de página enviando "state" como valor
  useEffect(() => {
    setPagina(location.state);
  }, [location.state]);

  //Função para alterar de página
  const alterarPagina = (novaPagina) => {
    setPagina(novaPagina);
  };

  //Função para mostrar/ocultar a senha
  const togglePasswordVisibility = () => {
    setMostrarSenha((prevMostrar) => !prevMostrar);
  };

  //Função para enviar os dados do formulário
  const handleChange = (event) => {
    setFormDado({
      ...formDado,
      [event.target.id]: event.target.value,
    });
  };

  //Função para validar os dados do formulário
  const validação = () => {
    let formErrors = {};
    if (!formDado.nome.trim()) {
      formErrors.nome = "espaço obrigatorio";
    }
    if (!formDado.email.trim()) {
      formErrors.email = "espaço obrigatorio";
    }
    if (!formDado.senha.trim()) {
      formErrors.senha = "espaço obrigatorio";
    }
    setErro(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  //Função para fazer o cadastro
  const handleCadastro = async (event) => {
    event.preventDefault();
    // Valida os dados
    if (validação()) {
      try {
        // Envia os dados para o backend
        const response = await axios.post(
          "http://localhost:8000/api/users/create/",
          {
            username: formDado.nome,
            email: formDado.email,
            password: formDado.senha,
          }
        );
        // Reseta os dados do formulário
        setErro({});
        setFormDado({ nome: "", email: "", senha: "" });
        // Mostra a mensagem de sucesso
        setMensagem("Usuário cadastrado com sucesso!");
        console.log("Dados enviados:", response.data);
      } catch (error) {
        if (error.response) {
          console.error("Erro no cadastro:", error.response.data);
        } else {
          console.error("Erro desconhecido:", error.message);
        }
      }
    }
  };

  return (
    <>
      <div id="home" className={styles.home}>

        <div id="form-header" className={styles.header}>

          <button id="loginBtn" className={`${styles.botaoDiv} ${ pagina === "login" ? styles.botaoDivOn : "" }`} onClick={() => alterarPagina("login")}>
            Login
          </button>

          <button id="cadastroBtn" className={`${styles.botaoDiv} ${pagina === "cadastro" ? styles.botaoDivOn : ""}`} onClick={() => alterarPagina("cadastro")}>
            <u>Cadastro</u>
          </button>

        </div>

        <div id="form-container" className={styles.box}>
          
          {pagina === "login" ? (
            <section className={styles.sessaoLogin} id="login">

              <input type="email" id="email" placeholder="Email" required />

              <div className={styles.passwordContainer}>

                <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" required />

                <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                  <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder" />
                </span>

              </div>

              <button type="button" className={styles.botao}>
                Entrar
              </button>

              <div className={styles.esqueceuasenha}>

                <Link to="/esqueceu-senha">
                  Esqueceu a Senha?
                </Link>

              </div>

            </section>

          ) : (
            <section className={styles.sessaoCadastro} id="cadastro">

              <input type="text" id="nome" placeholder="Nome" value={formDado.nome} onChange={handleChange} required/>

              {erro.nome && <p className={styles.error}>{erro.nome}</p>}

              <input type="email" id="email" placeholder="Email" value={formDado.email} onChange={handleChange} required/>
              {erro.email && <p className={styles.error}>{erro.email}</p>}

              <div className={styles.passwordContainer}>
                <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" value={formDado.senha} onChange={handleChange} required/>
                {erro.senha && <p className={styles.error}>{erro.senha}</p>}

                <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                  <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder" />
                </span>

              </div>

              <button type="button" className={styles.botao} onClick={handleCadastro}>
                Cadastrar
              </button>

              {mensagem && (<p>{mensagem}</p>)}
            </section>)}

        </div>

      </div>

    </>
  );
}

export default Cadastro;
