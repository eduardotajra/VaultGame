import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import styles from "./Navbar.module.css";
import logo from "./img/logo.png";
import lupa from "./img/lupa.png";
import carrinho from "./img/carrinho.png";
import sigIn from "./img/login.png";
import nintendo from "./img/navBarImg/nintendo.png";
import pc from "./img/navBarImg/pc.png";
import ofertas from "./img/navBarImg/ofertas.png";
import playstation from "./img/navBarImg/playstation.png";
import xbox from "./img/navBarImg/xbox.png";

function Navbar() {
  // Efeito de ScrollReveal
  useEffect(() => {
    ScrollReveal().reveal(".page-header", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: false,
    });
  }, []);


  const navigate = useNavigate();

  // função pra mandar o estado para o troca.js
  function login(estado) {
    navigate("/cadastro", {
      state: { ativo: estado },
    });
  }

  return (
    <>
      <header id="page-header">
        <div className={styles.interface}>
          <div className={styles.logo}>
            <Link to="/">
              <a className="logo" href="index.html">
                <img src={logo} alt="Logo" />
              </a>
            </Link>
          </div>

          <div className={styles.central}>
            <ul className={styles.menu}>
              <li>
                <a href="#Ofertas" className={styles.icons}>
                  <img src={ofertas} alt="Ofertas" />
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#PC" className={styles.icons}>
                  <img src={pc} alt="Pc" />
                  PC
                </a>
              </li>
              <li>
                <a href="#Xbox" className={styles.icons}>
                  <img src={xbox} alt="Xbox" />
                  Xbox
                </a>
              </li>
              <li>
                <a href="#Playstation" className={styles.icons}>
                  <img src={playstation} alt="Playstation" />
                  Playstation
                </a>
              </li>
              <li>
                <a href="#Nintendo" className={styles.icons}>
                  <img src={nintendo} alt="Nintendo" />
                  Nintendo
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.search}>
            <input type="text" id="busca" placeholder="Buscar" required />

            <a className={styles.linko} href="/">
              <img className={styles.lupa} id="lupa" src={lupa} alt="Mostrar/Esconder" />
            </a>
          </div>

          <div className={styles.rightNav}>
            <div className={styles.compras}>
              <a href="#CarrinhoDeCompras">
                <img id="carrinho" src={carrinho} alt="Mostrar/Esconder" />
              </a>
            </div>

            <div className={styles.loginIcone}>
              <button className={styles.loginbotao}>
                <img src={sigIn} alt="Logo" className="navbar-logo" />
                <p> Entrar </p>
              </button>

              <div className={styles.dropdown}>
                <ul className={styles.ulDropdown}>
                  <li>
                    {/* vai mandar login como "login" */}
                    <button onClick={() => login("login")}>Fazer Login</button> 
                  </li>
                  <li>
                    {/* vai mandar login como "cadastro" */}
                    <button onClick={() => login("cadastro")}>Criar Conta</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
