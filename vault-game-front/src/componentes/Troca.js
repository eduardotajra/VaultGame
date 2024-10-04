import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importando useLocation
import Login from "./Login";
import Cadastro from "./Cadastro";
import styles from "./Troca.module.css";

function Troca() {

  const location = useLocation(); // hook de navegacao
  const [ativo, setAtivo] = useState("login"); // criando variaveis e setando valor padrao pra login

  useEffect(() => {
    if (location.state && location.state.ativo) {
      setAtivo(location.state.ativo); // Atualizando o estado com base na navegação
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <div className={styles.botaoContainer}>
        <button
          className={`${styles.botaoDiv} ${ativo === "login" ? styles.botaoDivOn : ""}`} // troca o valor de ativo para "login"
          onClick={() => setAtivo("login")} // quando clicar no botao login ele passa o valor de "ativo" pra funcao setAtivo
        >
          Login
        </button>
        <button
          className={`${styles.botaoDiv} ${ativo === "cadastro" ? styles.botaoDivOn : ""}`} // mesmo coisa la de cima
          onClick={() => setAtivo("cadastro")} // msm coisa aqui, so que para cadastro
        >
          Cadastro
        </button>
      </div>

      <div className={styles.componenteContainer}>
        {/* ativo eh login? entao vai receber voltar a pagina login, caso contrario recebe cadastro :) */}
        {ativo === "login" ? <Login /> : <Cadastro />}
      </div>

    </div>
  );
}

export default Troca;