import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Homepage.module.css";
import banner from "./img/banner.jpg";
import banner2 from "./img/banner2.jpg";
import Footer from "./Footer";

function Homepage() {
  
  const [jogosPC, setJogosPC] = useState([]);
  const [jogosPlaystation, setJogosPlaystation] = useState([]);
  const [jogosSwitch, setJogosSwitch] = useState([]);

  useEffect(() => {
    const fetchJogos = async (plataforma, setState) => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/jogos/getJogosPlataforma/${plataforma}`);
        setState(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    };

    fetchJogos("PC", setJogosPC);
    fetchJogos("Playstation", setJogosPlaystation);
    fetchJogos("Nintendo Switch", setJogosSwitch);
  }, []);

  return (
    <>
      <style jsx>{`
        body {
          background-color: rgb(234, 234, 234) !important;
          background-image: none !important;
          padding-right: 50%;
          padding-left: 50%;
        }
        .carousel-indicators .active {
          background-color: #4f46e5;
        }
        .card-img-top {
          height: 400px;
        }
      `}</style>
      <div className={styles.homepage}>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={banner} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={banner2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={banner} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <h4>Ofertas de PC</h4>
        <div className={styles.cartasContainer}>
          <div className={styles.cartas}>
            {jogosPC.slice(0,4).map((jogo) => (
              <div key={jogo.id} className={`${styles.card} bg-light mb-3`} style={{ width: "18em" }}>
                <img className="card-img-top img-fluid p-3" src={jogo.imgUrl} alt={jogo.titulo} />
                <div className="card-body">
                  <h5 className="text-secondary mb-3">{jogo.titulo} - {jogo.plataforma}</h5>
                  <p className="text-secondary">R$ {jogo.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                  <p className="text-secondary">3x Sem Juros - R$ {jogo.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                  <Link to={`/comprar/${jogo.id}`} className="btn btn-success">Compre Agora</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      <h4>Ofertas de Playstation</h4>
      <div className={styles.cartasContainer}>
        <div className={styles.cartas}>
          {jogosPlaystation.slice(0,4).map((jogo) => (
            <div key={jogo.id} className={`${styles.card} bg-light mb-3`} style={{ width: "18em" }}>
              <img className="card-img-top img-fluid p-3" src={jogo.imgUrl} alt={jogo.titulo} />
              <div className="card-body">
                <h5 className="text-secondary mb-3">{jogo.titulo} - {jogo.plataforma}</h5>
                <p className="text-secondary">R$ {jogo.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                <p className="text-secondary">3x Sem Juros - R$ {jogo.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                <Link to={`/comprar/${jogo.id}`} className="btn btn-success">Compre Agora</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h4>Ofertas de Nintendo Switch</h4>
      <div className={styles.cartasContainer}>
        <div className={styles.cartas}>
          {jogosSwitch.slice(0,4).map((jogo) => (
            <div key={jogo.id} className={`${styles.card} bg-light mb-3`} style={{ width: "18em" }}>
              <img className="card-img-top img-fluid p-3" src={jogo.imgUrl} alt={jogo.titulo} />
              <div className="card-body">
                <h5 className="text-secondary mb-3">{jogo.titulo} - {jogo.plataforma}</h5>
                <p className="text-secondary">R$ {jogo.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                <p className="text-secondary">3x Sem Juros - R$ {jogo.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                <Link to={`/comprar/${jogo.id}`} className="btn btn-success">Compre Agora</Link>
              </div>
            </div>
          ))}
        </div>
      </div>


      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Homepage;
