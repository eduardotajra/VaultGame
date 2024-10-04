import React, { useState } from "react";
import Login from "./Login";
import Cadastro from "./Cadastro";
import styles from "./Troca.module.css";

function Troca() {
  const [ativo, setAtivo] = useState("login");
  return (
    <div className={styles.container}>
      <div className={styles.botaoContainer}>

        <button
          className={`${styles.botao} ${ativo === "login" ? styles.ativo : ""}`}
          onClick={() => setAtivo("login")}
        >
          Login
        </button>
        <button
          className={`${styles.botao} ${ativo === "cadastro" ? styles.ativo : ""}`}
          onClick={() => setAtivo("cadastro")}
        >
          Cadastro
        </button>
      </div>

      <div className={styles.componenteContainer}>

        {ativo === "login" ? <Login /> : <Cadastro />}
      </div>
    </div>
  );
}

export default Troca;
