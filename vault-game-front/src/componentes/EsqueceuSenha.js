import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import styles from "./EsqueceuSenha.module.css";
import voltar from "./img/voltar.png";

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
      <div id="form-container" className={styles.box}>
        <div className={styles.botao1}>
          <Link className={styles.link} to="/">
            <img className={styles.voltar} src={voltar} alt="Voltar" />
          </Link>
        </div>

        <p className={styles.redefinirSenha}>Redefinir Senha</p>

        <section className={styles.redefinir}>
          <input
            className={styles.email}
            type="email"
            id="email"
            placeholder="Email"
            required
          />

          <div className={styles.botoes}>
            <button type="button" className={styles.botao}>
              Enviar Código
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default EsqueceuSenha;
