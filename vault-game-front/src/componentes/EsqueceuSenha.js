import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  
  function retornar(){
    navigate("/cadastro", {
      state: "login",
    });
}

  return (
    <>

      <div id="form-container" className={styles.box}>

        <div className={styles.conteudoBox}>

          <div className={styles.redefinirSenha}>
            <h3>Esqueceu sua senha?</h3>
            <p className={styles.paragrafo}>Informe seu e-mail de cadastro e siga as instruções.</p>
          </div>

          <section className={styles.redefinir}>

            <input className={styles.email} type="email" id="email" placeholder="Email" required />

            <div className={styles.botoes}>

              <div className={styles.botao}>
                <a className={styles.link} onClick={() => retornar()}>
                  <p className={styles.textoRetornar}>Retornar</p>
                </a>
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
