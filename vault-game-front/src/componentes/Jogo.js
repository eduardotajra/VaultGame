import React, { useEffect, useState } from 'react';
import styles from "./Jogo.module.css";
import axios from 'axios';
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
        <style jsx>{`
            body {
              justify-content: inherit;
            }
          `} </style>

        <div className={styles.Jogo}>
            <div className={styles.imgFrame}>
                <img src={`${jogo.imgUrl}`} alt={jogo.titulo} />
            </div>
            
            <div className={styles.nome}>
                <h2>{jogo.titulo}</h2>
            </div>

            <div className={styles.desc}> 
                <p>{jogo.descricao}</p>
            </div>
            
            <p>Preço: R${jogo.preco}</p>
            <p>Avaliação: {jogo.avaliacao}</p>
            <p>Publisher: {jogo.publisher}</p>
            <p>Plataforma: {jogo.plataforma}</p>
            <p>Idioma: {jogo.idioma}</p>
            <p>Categoria: {jogo.categoria}</p>
        </div>
    </>
    );
}

export default Jogo;
