import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./Navbar.module.css";
import logo from "./img/logo.png";
import lupa from "./img/lupa.png";
import carrinho from "./img/carrinho.png";
import login from "./img/login.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".page-header", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: false,
    });
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header id="page-header">
        <div className={styles.interface}>
          <div className={styles.logo}>
            <a className="logo" href="index.html">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <nav className={styles.menu.desktop}>
            <ul className={styles.menu}>
              <li>
                <a href="#Ofertas">Ofertas</a>
              </li>
              <li>
                <a href="#PC">PC</a>
              </li>
              <li>
                <a href="#Xbox">Xbox</a>
              </li>
              <li>
                <a href="#PlayStation">PlayStation</a>
              </li>
              <li>
                <a href="#Nintendo">Nintendo</a>
              </li>
            </ul>
          </nav>

          <div className={styles.search}>
            <input type="text" id="busca" placeholder="Buscar" required />

            <a href="">
              <img id="lupa" src={lupa} alt="Mostrar/Esconder" />
            </a>
          </div>

          <div className={styles.compras}>
            <a href="#CarrinhoDeCompras">
              <img id="carrinho" src={carrinho} alt="Mostrar/Esconder" />
            </a>
          </div>

          
            <div className={styles.loginIcone}>
              <button className={styles.loginbotao}>
                <img src={login} alt="Logo" className="navbar-logo" /> <p> Entrar </p>
              </button>
              {/* Mover o dropdown aqui para que seja um irmão do botão */}
              <div className={`${styles.dropdown} ${ isDropdownOpen ? styles.show : ""}`} >
                <ul>
                  <li>
                    <a href="/signup">Criar Conta</a>
                  </li>
                  <li>
                    <a href="/login">Fazer Login</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
