import React, { useEffect, useState } from 'react';
import styles from "./Jogo.module.css";
import axios from 'axios';
import Footer from "./Footer.js";
import { useParams } from 'react-router-dom';

function Jogo() {
    const { id } = useParams();
    const [jogo, Jogo] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/jogos/getJogo/${id}`)
            .then(response => Jogo(response.data))
    }, [id]);

    if (!jogo) return <div>Jogo não encontrado</div>;

    return (
        <>

        <div className={styles.jogo}>
            <div className={styles.imgFrame}>
                <img src={`${jogo.imgUrl}`} alt={jogo.titulo} />
            </div>
                <div className={styles.box}>

                    <div className={styles.nomeDesc}>
                        <h3>{jogo.titulo}</h3>
                        <p>{jogo.descricao}</p>
                    </div>

                    <div className={styles.preco}> 
                        <h3><strong> R${jogo.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} </strong> </h3>
                    </div>

                    <div className={styles.comprar}>
                        <button className={styles.botaoCarrinho} type="submit">Adicionar ao Carrinho</button>
                        <button className={styles.botaoComprar} type="submit">Comprar</button>
                        
                    </div>
                </div>
        </div>

        <footer>
        <Footer />
        </footer>
    </>
    );
}

export default Jogo;
