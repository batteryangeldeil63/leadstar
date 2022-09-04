import React from "react";
import styled from "styled-components";
import Listas from "../Listas";

const Titulo = styled.h1`
    color: black;
    font-size: 36px;
    margin-bottom: 15px;
    @media (max-width: 425px){
        margin-top: 35px;
        font-size: 26px;
    }
    @media (max-width: 768px){
        font-size: 26px;
    }
    .centro{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 40%;
    }
`

const TextoChamada = (props) =>{
    return(
        <>
            <div className="centro">
                <Titulo>Quer ter este livro em PDF?</Titulo>
                <Listas text='+10.000 Downloads deste livro'/>
                <Listas text='Livro para estudantes'/>
                <Listas text='Livro totalmente gratuito'/>
            </div>
        </>
    )
}

export default TextoChamada;