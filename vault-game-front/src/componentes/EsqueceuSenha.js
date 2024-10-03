import { useEffect } from "react";
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
        <div className={styles.conteudoBox}>
          <div className={styles.redefinirSenha}>
            <h3>Esqueceu sua senha?</h3>
            <p className={styles.paragrafo}>informe seu e-mail de cadastro e siga as instruções.</p>
          </div>

          <section className={styles.redefinir}>
            <input
              className={styles.email}
              type="email"
              id="email"
              placeholder="Email"
              required
            />

            <div className={styles.botoes}>
              <div className={styles.botao}>
                <Link className={styles.link} to="/">
                  <p className={styles.textoRetornar}>retornar</p>
                </Link>
              </div>
              <div className={styles.botao}>
              <button type="button" className={styles.textoBotao} >
                Enviar Código
              </button>
              </div>
            </div>
          </section>
        </div>  
      </div>
    </>
  );
}

export default EsqueceuSenha;
