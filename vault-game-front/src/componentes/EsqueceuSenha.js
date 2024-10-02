import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import styles from "./EsqueceuSenha.module.css";

function EsqueceuSenha() {

  useEffect(() => {
    ScrollReveal().reveal("#form-container", {
      origin: "top",
      distance: "0px",
      duration: 1000,
      reset: false,
    });

    ScrollReveal().reveal("#botao1", {
      origin: "top",
      distance: "0px",
      duration: 1000,
      reset: false,
    });

  }, []);

  return (
    <>
    <Link to="/">
        <button id="botao1" className={styles.botao1}>
              Voltar
        </button>
    </Link>
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
