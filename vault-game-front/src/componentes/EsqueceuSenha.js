import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EsqueceuSenha.module.css";

function EsqueceuSenha() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const togglePasswordVisibility = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <>
      <div id="form-container" className={styles.box}>

        <p>Redefinir Senha</p>
        <br></br>

        <section className={styles.redefinir}>

          <input type="email" id="email" placeholder="Email" required />
          <br /> <br />

          <button type="button" className={styles.botao}>
            Enviar Código
          </button>

        </section>
        
      </div>
    </>
  );
}

export default EsqueceuSenha;
