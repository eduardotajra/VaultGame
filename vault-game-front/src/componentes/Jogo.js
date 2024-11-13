import React, { useEffect, useState } from 'react';
import styles from "./Jogo.module.css";
import axios from 'axios';
import Footer from "./Footer.js";
import { useParams } from 'react-router-dom';

function Jogo() {
    const { id } = useParams();
    const [jogo, setJogo] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/jogos/getJogo/${id}`)  
        .then(response => {
            const dataJogo = response.data;
            const dataLancamento = new Date(dataJogo.lancamento);
            dataJogo.lancamento = dataLancamento.toLocaleDateString('pt-BR');
            setJogo(dataJogo);
        });
    }, [id]);

    if (!jogo) return <div>Jogo não encontrado</div>;

    return (
        <>
            <style jsx>{`
                body {
                    background-color: rgb(237, 237, 237);
                    background-image: none;
                }
            `}</style>
            
            <div className={styles.jogo}>
                <div className={styles.imgFrame}>
                    <img src={`${jogo.imgUrl}`} alt={jogo.titulo} />
                </div>
                <div className={styles.box}>
                    <div className={styles.nomeDesc}>
                        <h2>{jogo.titulo}</h2>
                        <p>{jogo.descricao}</p>
                    </div>

                    <div className={styles.preco}> 
                        <h3><strong>R${jogo.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong></h3>
                    </div>

                    <div className={styles.comprar}>
                        <button className={styles.botaoCarrinho} type="submit">Adicionar ao Carrinho</button>
                        <button className={styles.botaoComprar} type="submit">Comprar</button>
                    </div>
                </div>
            </div>
            
            <div className={styles.boxJogo}>
                <div className={styles.infoBox}>
                    <div className={styles.infoItem}>
                        <strong>Lançamento</strong>
                        <p>{jogo.lancamento}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Publisher</strong>
                        <p>{jogo.publisher}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Avaliação</strong>
                        <p>{jogo.avaliacao}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Legendas</strong>
                        <p>{jogo.idioma}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Áudio</strong>
                        <p>{jogo.idiomaAudio}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Categoria</strong>
                        <p>{jogo.categoria}</p>
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
