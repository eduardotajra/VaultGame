import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./Navbar.module.css";
import logo from "./img/logo.png";
import lupa from "./img/lupa.png";

function Navbar(){
    useEffect(() => {
        ScrollReveal().reveal(".page-header", {
          origin: "top",
          distance: "100px",
          duration: 1000,
          reset: false,
        });
      }, []);
        

    return(
        <>
        <header id="page-header">
            <div className={styles.interface}>

                <div className={styles.logo}>
                    <a className="logo" href="index.html">
                        <img src={logo} alt="Logo"/>
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
                            <a href="#Xbox">Ofertas</a>
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
                    <input type="text" id="busca" placeholder="Buscar" required/>

                    <a href="">
                        <img id="lupa" src={lupa} alt="Mostrar/Esconder"/>
                    </a>
                </div>

            </div>
        </header>
        </>
    );

}

export default Navbar;