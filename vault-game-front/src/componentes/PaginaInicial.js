import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

function PaginaInicial() {
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
      <></>
    );}

    export default PaginaInicial;