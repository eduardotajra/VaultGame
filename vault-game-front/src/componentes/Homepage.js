import styles from "./Homepage.module.css";
import Navbar from "./Navbar";
import logo from "./img/logo.png"
import minecraft from "./img/jogosImg/minecraft_cover.png"

function Homepage(){
    return (
    <> 
    <div className={styles.homepage}>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={logo} alt="First slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={logo} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={logo} alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        
        
        <h2>Ofertas</h2>

        <div className={styles.cartasContainer}>
            <div className={styles.cartas}>
                <div className="card bg-light mb-3" style={{ width: '18em' }}>
                    <img class="card-img-top p-3" src={minecraft} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="text-secondary">Minecraft</h5>
                        <p class="text-secondary">Minecraft - Versão de PC</p>
                        <div className={styles.texto}> 
                            <p class="text-secondary"> R$ 129,99 </p>
                        </div>
                        <a href="#" class="btn btn-success">Compre Agora</a>
                    </div>
                </div>
                <div className="card bg-light mb-3" style={{ width: '18em' }}>
                    <img class="card-img-top p-3" src={minecraft} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="text-secondary">Minecraft</h5>
                        <p class="text-secondary">Minecraft - Versão de PC</p>
                        <div className={styles.texto}> 
                            <p class="text-secondary"> R$ 129,99 </p>
                        </div>
                        <a href="#" class="btn btn-success">Compre Agora</a>
                    </div>
                </div>
                <div className="card bg-light mb-3" style={{ width: '18em' }}>
                    <img class="card-img-top p-3" src={minecraft} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="text-secondary">Minecraft</h5>
                        <p class="text-secondary">Minecraft - Versão de PC</p>
                        <div className={styles.texto}> 
                            <p class="text-secondary"> R$ 129,99 </p>
                        </div>
                        <a href="#" class="btn btn-success">Compre Agora</a>
                    </div>
                </div>
                <div className="card bg-light mb-3" style={{ width: '18em' }}>
                    <img class="card-img-top p-3" src={minecraft} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="text-secondary">Minecraft</h5>
                        <p class="text-secondary">Minecraft - Versão de PC</p>
                        <div className={styles.texto}> 
                            <p class="text-secondary"> R$ 129,99 </p>
                        </div>
                        <a href="#" class="btn btn-success">Compre Agora</a>
                    </div>
                </div>
            </div>

            <h2>Ofertas</h2>

            <div className={styles.cartas}>
                <div className="card bg-light mb-3" style={{ width: '18em' }}>
                    <img class="card-img-top p-3" src={minecraft} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="text-secondary">Minecraft</h5>
                        <p class="text-secondary">Minecraft - Versão de PC</p>
                        <div className={styles.texto}> 
                            <p class="text-secondary"> R$ 129,99 </p>
                        </div>
                        <a href="#" class="btn btn-success">Compre Agora</a>
                    </div>
                </div>
                <div className="card bg-light mb-3" style={{ width: '18em' }}>
                    <img class="card-img-top p-3" src={minecraft} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="text-secondary">Minecraft</h5>
                        <p class="text-secondary">Minecraft - Versão de PC</p>
                        <div className={styles.texto}> 
                            <p class="text-secondary"> R$ 129,99 </p>
                        </div>
                        <a href="#" class="btn btn-success">Compre Agora</a>
                    </div>
                </div>
                <div className="card bg-light mb-3" style={{ width: '18em' }}>
                    <img class="card-img-top p-3" src={minecraft} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="text-secondary">Minecraft</h5>
                        <p class="text-secondary">Minecraft - Versão de PC</p>
                        <div className={styles.texto}> 
                            <p class="text-secondary"> R$ 129,99 </p>
                        </div>
                        <a href="#" class="btn btn-success">Compre Agora</a>
                    </div>
                </div>
                <div className="card bg-light mb-3" style={{ width: '18em' }}>
                    <img class="card-img-top p-3" src={minecraft} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="text-secondary">Minecraft</h5>
                        <p class="text-secondary">Minecraft - Versão de PC</p>
                        <div className={styles.texto}> 
                            <p class="text-secondary"> R$ 129,99 </p>
                        </div>
                        <a href="#" class="btn btn-success">Compre Agora</a>
                    </div>
                </div>
            </div>


        </div>
    </div>
    </>
    )
}


export default Homepage;