import React from "react";
import styled from "styled-components";

const Rodape = styled.footer`
    width: 90%;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 30px;
    @media (max-width: 425px){
        flex-direction: column;
        padding: 30px 0;
        align-items: center;
        text-align: center;
        .titulo-footer{
            padding-bottom: 20px;
        }
    }
`

const Footer = () =>{
    return(
    <>
    <Rodape>
        <h2 className="titulo-footer">Informações do livro</h2>
        <div>
            <h3>Autor:</h3>
            <p>Dale Carnegie</p>
        </div>
        <div>
            <h3>Páginas:</h3>
            <p>256 páginas</p>
        </div>
        <div>
            <h3>Idioma</h3>
            <p>Português</p>
        </div>
    </Rodape>
    </>
    )
}

export default Footer;