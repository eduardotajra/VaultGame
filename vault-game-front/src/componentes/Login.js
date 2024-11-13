import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./CadastroLogin.module.css";
import olhoFechado from "./img/olho_fechado.png";
import olho from "./img/olho.png";
import loadingGif from "./img/loading.gif";

function Login() {
  const [erro, setErro] = useState({});
  const [formDado, setFormDado] = useState({ nome: "", senha: "" });
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

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
    if (!formDado.senha.trim()) {
      formErrors.senha = "Espaço obrigatório";
    }
    setErro(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (validação()) {
      setLoading(true);
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/autenticacao/login/", {
          username: formDado.nome,
          password: formDado.senha,
        });

        setErro({});
        setFormDado({ nome: "", senha: "" });
        console.log("Dados enviados:", response.data);

        navigate("/");

      } catch (error) {
        if (error.response) {
          console.error("Erro no login:", error.response.data);
          setMensagem("Erro no login. Verifique suas credenciais.");
        } else {
          console.error("Erro desconhecido:", error.message);
          setMensagem("Erro desconhecido. Tente novamente.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.box}>
        
        <section className={styles.sessaoLogin} id="login">
          <input type="text" id="nome" placeholder="Username" value={formDado.nome} onChange={handleChange} required />
          {erro.nome && <p className={styles.error}>{erro.nome}</p>}
          
          <div className={styles.passwordContainer}>
            <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" value={formDado.senha} onChange={handleChange} required/>
            {erro.senha && <p className={styles.error}>{erro.senha}</p>}
            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
              <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder"/>
            </span>
          </div>

          <button type="button" className={styles.botao} onClick={handleLogin} disabled={loading}>
            {loading ? (
              <img src={loadingGif} alt="Carregando" style={{ width: "20px", height: "20px" }} />
            ) : (
              "Entrar"
            )}
          </button>

          <div className={styles.esqueceuasenha}>
            <Link to="/esqueceu-senha">Esqueceu a Senha?</Link>
          </div>

          {mensagem && <p><br/>{mensagem}</p>}
        </section>

      </div>
    </div>
  );
}

export default Login;
