import React, { useState } from "react";
import styles from "./CadastroLogin.module.css";
import axios from "axios";
import olhoFechado from "./img/olho_fechado.png";
import olho from "./img/olho.png";
import loadingGif from "./img/loading.gif";

function Cadastro() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [formDado, setFormDado] = useState({ nome: "", email: "", senha: "" });
  const [erro, setErro] = useState({});
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  // Função para mostrar/ocultar a senha
  const togglePasswordVisibility = () => {
    setMostrarSenha((prevMostrar) => !prevMostrar);
  };

  const handleChange = (event) => {
    setFormDado({
      ...formDado,
      [event.target.id]: event.target.value,
    });
  };

  const validação = () => {
    let formErrors = {};
    if (!formDado.nome.trim()) {
      formErrors.nome = "Espaço obrigatório";
    }
    if (!formDado.email.trim()) {
      formErrors.email = "Espaço obrigatório";
    }
    if (!formDado.senha.trim()) {
      formErrors.senha = "Espaço obrigatório";
    }
    setErro(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleCadastro = async (event) => {
    event.preventDefault();
    if (validação()) {
      setLoading(true);
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/autenticacao/register/", {
          username: formDado.nome,
          email: formDado.email,
          password: formDado.senha
        });

        setErro({});
        setFormDado({ nome: "", email: "", senha: "" });
        setMensagem("Usuário cadastrado com sucesso!");
        console.log("Dados enviados:", response.data);
      } catch (error) {
        if (error.response) {
          console.error("Erro no cadastro:", error.response.data);
        } else {
          console.error("Erro desconhecido:", error.message);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.home}>

      <div className={styles.box}>
        
        <section className={styles.sessaoCadastro} id="cadastro">
          <input type="text" id="nome" placeholder="Username" value={formDado.nome} onChange={handleChange} required/>

          {erro.nome && <p className={styles.error}>{erro.nome}</p>}

          <input type="email" id="email" placeholder="Email" value={formDado.email} onChange={handleChange} required/>

          {erro.email && <p className={styles.error}>{erro.email}</p>}

          <div className={styles.passwordContainer}>
            <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" value={formDado.senha} onChange={handleChange} required/>

            {erro.senha && <p className={styles.error}>{erro.senha}</p>}

            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
              <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder"/>
            </span>
          </div>

          <button type="button" className={styles.botao} onClick={handleCadastro} disabled={loading}>
            {loading ? (
              <img src={loadingGif} alt="Carregando" style={{ width: "20px", height: "20px" }} />
            ) : (
              "Entrar"
            )}
          </button>

          {mensagem && <p>{mensagem}</p>}

        </section>

      </div>

    </div>
  );
}

export default Cadastro;
