import styles from "./Homepage.module.css";
import Navbar from "./Navbar";
import logo from "./img/logo.png";
import minecraft from "./img/jogosImg/minecraft_cover.png";
import reddead2 from "./img/jogosImg/red_dead_2_cover.jpg";
import wukong from "./img/jogosImg/wukong_cover.png";
import eldenring from "./img/jogosImg/elden_ring_cover.jpg"

function Homepage() {
  return (
    <>
      <style jsx>{`
        body {
          background-color: rgb(234, 234, 234) !important;
          background-image: none !important;
        }
        .carousel-indicators .active {
          background-color: #4f46e5; /* Cor indigo-400 */
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
              <img className="d-block w-100" src={logo} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={logo} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={logo} alt="Third slide" />
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
            <div className="card bg-light mb-3" style={{ width: "18em" }}>
              <img className="card-img-top img-fluid p-3" src={minecraft} alt="Minecraft" />
              <div className="card-body">
                <h5 className="text-secondary mb-3">Minecraft - PC (Microsoft Store)</h5>
                <div className={styles.texto}>
                  <p className="text-secondary"> R$ 129,99 </p>
                </div>
                <p className="text-secondary"> 3x Sem Juros - R$ 43,33 </p>   
                <a href="#" className="btn btn-success">Compre Agora</a>
              </div>
            </div>
            <div className="card bg-light mb-3" style={{ width: "18em" }}>
              <img className="card-img-top img-fluid p-3" src={reddead2} alt="Red Dead Redemption 2" />
              <div className="card-body">
                <h5 className="text-secondary mb-3">Red Dead Redemption 2 - PC (Steam)</h5>
                <div className={styles.texto}>
                  <p className="text-secondary"> R$ 81,99 </p>
                </div>
                <p className="text-secondary"> 3x Sem Juros - R$ 27,33 </p>   
                <a href="#" className="btn btn-success">Compre Agora</a>
              </div>
            </div>
            <div className="card bg-light mb-3" style={{ width: "18em" }}>
              <img className="card-img-top img-fluid p-3" src={wukong} alt="Black Myth Wukong" />
              <div className="card-body">
                <h5 className="text-secondary mb-3">Black Myth Wukong - PC (Steam)</h5>
                <div className={styles.texto}>
                  <p className="text-secondary"> R$ 245,50 </p>
                </div>
                <p className="text-secondary"> 3x Sem Juros - R$ 81,83 </p>   
                <a href="#" className="btn btn-success">Compre Agora</a>
              </div>
            </div>
            <div className="card bg-light mb-3" style={{ width: "18em" }}>
              <img className="card-img-top img-fluid p-3" src={eldenring} alt="Black Myth Wukong" />
              <div className="card-body">
                <h5 className="text-secondary mb-3">Elden Ring Standard Edition - PC (Steam)</h5>
                <div className={styles.texto}>
                  <p className="text-secondary"> R$ 230,50 </p>
                </div>
                <p className="text-secondary"> 3x Sem Juros - R$ 76,83 </p>   
                <a href="#" className="btn btn-success">Compre Agora</a>
              </div>
            </div>
          </div>

          {/*<h4>Ofertas</h4>*/}

        </div>
      </div>
    </>
  );
}

export default Homepage;