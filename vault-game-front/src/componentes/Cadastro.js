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
  // declarações -- tutu
  const location = useLocation();
  const [pagina, setPagina] = useState(location.state);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  // ver se está vazio e erro - tutu
  const [formDado, setFormDado] = useState({
    nome: "",
    email: " ",
    senha: "",
  });
  const [erro, setErro] = useState({});
  // acho que da para aproveitar essa parte que o duardo fez para reduzir o codigo- tutu
  const [nome, setNome] = useState(""); // cria a variavel de nome vazia que dps é setada pelo setNome no <input> de nome
  const [email, setEmail] = useState(""); // cria a variavel email vazia que dps é setada pelo setEmail no <input> de email
  const [senha, setSenha] = useState(""); // cria a variavel senha vazia que dps é setada pelo setSenha no <input> de senha
  const [mensagem, setMensagem] = useState(""); // mostrar uma mensagem se o usuário se cadastrou ou não

  useEffect(() => {
    setPagina(location.state);
  }, [location.state]);
  //  nao entendi esse alterarPagina :c e minha defesa era quase 1h da manhã e eu tinha que acordar 5h -tutu
  const alterarPagina = (novaPagina) => {
    setPagina(novaPagina);
  };

  const togglePasswordVisibility = () => {
    setMostrarSenha((prevMostrar) => !prevMostrar);
  };
  // verifica mundanças e pega o valor do html - tutu
  const handleChange = (event) => {
    setFormDado({
      ...formDado,
      [event.target.id]: event.target.value,
    });
  };
//ta validando kkk
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

  // Função para lidar com o cadastro "alguem me relembra o que e async (seria meio que um aguardar )"-tutu
  const handleCadastro = async (event) => {
    event.preventDefault();
    if (validação()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/users/create/",
          {
            username: formDado.nome,
            email: formDado.email,
            full_name: formDado.nome,
            password: formDado.senha,
          }
        );
        // pensei que redefinindo o setErro o problema estaria sendo resolvido porem nao foi :c-tutu
        setErro({});
        setMensagem("Usuário cadastrado com sucesso!");
        console.log("Dados enviados:", response.data);
      } catch (error) {
        // pq no console ? -tutu
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
          <button
            id="loginBtn"
            className={`${styles.botaoDiv} ${
              pagina === "login" ? styles.botaoDivOn : ""
            }`}
            onClick={() => alterarPagina("login")}
          >
            {" "}
            Login{" "}
          </button>
          <button
            id="cadastroBtn"
            className={`${styles.botaoDiv} ${
              pagina === "cadastro" ? styles.botaoDivOn : ""
            }`}
            onClick={() => alterarPagina("cadastro")}
          >
            {" "}
            <u>Cadastro</u>{" "}
          </button>
        </div>

        <div id="form-container" className={styles.box}>
          {pagina === "login" ? (
            <section className={styles.sessaoLogin} id="login">
              <input type="email" id="email" placeholder="Email" required />
              <br /> <br />
              <div className={styles.passwordContainer}>
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id="senha"
                  placeholder="Senha"
                  required
                />

                <span
                  className={styles.togglePassword}
                  onClick={togglePasswordVisibility}
                >
                  <img
                    id="eye-icon"
                    src={mostrarSenha ? olhoFechado : olho}
                    alt="Mostrar/Esconder"
                  />
                </span>
              </div>
              <br />
              <button type="button" className={styles.botao}>
                {" "}
                Entrar{" "}
              </button>
              <br /> <br />
              <div className={styles.esqueceuasenha}>
                <Link to="/esqueceu-senha">
                  <a href="#esqueceu"> Esqueceu a Senha? </a>
                </Link>
              </div>
            </section>
          ) : (
            <section className={styles.sessaoCadastro} id="cadastro">
              <input
                type="text"
                id="nome"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              {erro.nome && <p className={styles.error}>{erro.nome}</p>} 
              {/* tem 3 dessas um p cada input dps arrumar no css para deixar o contorno vermelho(acho que ficaria melhor) */}
              <br /> <br />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {erro.email && <p className={styles.error}>{erro.email}</p>}
              <br /> <br />
              <div className={styles.passwordContainer}>
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id="senha"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                {erro.senha && <p className={styles.error}>{erro.senha}</p>}
                <span
                  className={styles.togglePassword}
                  onClick={togglePasswordVisibility}
                >
                  <img
                    id="eye-icon"
                    src={mostrarSenha ? olhoFechado : olho}
                    alt="Mostrar/Esconder"
                  />
                </span>
              </div>
              <br />
              <button
                type="button"
                className={styles.botao}
                onClick={handleCadastro}
              >
                {" "}
                Cadastrar{" "}
              </button>
              {mensagem && (
                <p>
                  <br />
                  <br />
                  <br />
                  {mensagem}
                </p>
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default Cadastro;
