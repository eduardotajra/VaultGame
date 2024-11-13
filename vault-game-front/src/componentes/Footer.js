import logo from "./img/logo.png";
import styles from "./Footer.module.css";

function Footer() {
    return (
    <>
        <div className={styles.footerContainer}>
            <div className={styles.footerInfo}>
                <div className={styles.footerSection}>
                    <h3>Criadores:</h3>
                    <p>
                    <a href="https://github.com/eduardotajra" target="blank_">Eduardo Tajra</a>,
                    <a href="https://github.com/lucas-twygz" target="blank_"> Lucas Melo</a> e
                    <a href="https://github.com/pucciNatan" target="blank_"> Natan Pucci</a></p>
                    
                </div>
                <div className={styles.footerSection}>
                    <h3>Website feito apenas para fins educacionais</h3>
                </div>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <p>© 2024 VaultGame - Todos os direitos reservados.</p>
        </div>
    </>
    );
}

export default Footer;
