import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CadastroLogin.module.css";
import olhoFechado from "./img/olho_fechado.png";
import olho from "./img/olho.png";

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Função para mostrar/ocultar a senha
  const togglePasswordVisibility = () => {
    setMostrarSenha((prevMostrar) => !prevMostrar);
  };

  return (
    <div className={styles.home}>
      <div className={styles.box}>
        
        <section className={styles.sessaoLogin} id="login">
          <input type="email" id="email" placeholder="Email" required />

          <div className={styles.passwordContainer}>
            
            <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" required/>

            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
              <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder"/>
            </span>

          </div>

          <button type="button" className={styles.botao}>
            Entrar
          </button>

          <div className={styles.esqueceuasenha}>
            <Link to="/esqueceu-senha">Esqueceu a Senha?</Link>
          </div>

        </section>

      </div>

    </div>
  );
}

export default Login;
