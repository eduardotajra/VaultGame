// import styles from "./Login.module.css";

// function Login(){


//     return(
//             <div id="home" className={styles.home}>

//                 <div id="form-header" className={styles.header}>

//                     <button id="loginBtn" className={`${styles.botaoDiv} ${ pagina === "login" ? styles.botaoDivOn : "" }`} onClick={() => alterarPagina("login")}>
//                         Login
//                     </button>

//                     <button id="cadastroBtn" className={`${styles.botaoDiv} ${pagina === "cadastro" ? styles.botaoDivOn : ""}`} onClick={() => alterarPagina("cadastro")}>
//                         <u>Cadastro</u>
//                     </button>

//                 </div>

//                 <div id="form-container" className={styles.box}>
//                     <section className={styles.sessaoLogin} id="login">

//                     <input type="email" id="email" placeholder="Email" required />

//                     <div className={styles.passwordContainer}>

//                     <input type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Senha" required />

//                     <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
//                         <img id="eye-icon" src={mostrarSenha ? olhoFechado : olho} alt="Mostrar/Esconder" />
//                     </span>

//                     </div>

//                     <button type="button" className={styles.botao}>
//                     Entrar
//                     </button>

//                     <div className={styles.esqueceuasenha}>

//                     <Link to="/esqueceu-senha">
//                         Esqueceu a Senha?
//                     </Link>

//                     </div>

//                     </section>
//                 </div>
//             </div>
//     );
// }

// export default Login;