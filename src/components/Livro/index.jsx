import React from "react";
import styled from "styled-components";

const BoxLivro = styled.div`
    width: 30%;
    height: auto;
    background-color: #fff;
    box-shadow: -5px 5px 10px #7fa4ce;
    border-radius: 10px;
    text-align: center;
    @media (max-width: 768px){
        width: 50%;
    }
    @media (max-width: 425px){
        width: 80%;
    }
`

const ImagemLivro = styled.img`
    width: 80%;
    margin: 30px 0;
`

const Free = styled.img`
    width: 15%;
    position: absolute;
    right: 55%;
    top: 15%;
    @media (max-width: 1024px){
        width: 12%;
        right: 60%;
        top: 20%;
    }
    @media (max-width: 768px){
        width: 20%;
        right: 15%;
        top: 10%;
    }
    @media (max-width: 425px){
        width: 25%;
        right: 3%;
        top: 17%;
    }
`

const Livro = () =>{
    return(
        <BoxLivro>
            <ImagemLivro src="img/livro.jpg" alt="Imagem da capa do livro"/>
            <Free src='img/free.png' alt='selo de gratuito'/>
        </BoxLivro>
    )
}

export default Livro