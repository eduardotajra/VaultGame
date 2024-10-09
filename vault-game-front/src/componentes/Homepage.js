import styles from "./Homepage.module.css";
import Navbar from "./Navbar";

function Homepage(){
    return (
        <div className={styles.container}>
            <h1>Vault Game</h1>
            <p>Homepage</p>
        </div>
    )
}
export default Homepage;