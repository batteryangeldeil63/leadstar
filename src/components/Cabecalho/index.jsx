 import React from "react";
 import styled from 'styled-components'

 const Header = styled.header`
    padding: 30px;
    display: flex;
    column-gap: 40px;
    align-items: center;
    .bookicon{
        width: 4%;
        height: 4%;
    }
    .titulo-cabecalho{
        font-size: 36px;
    }
    @media (max-width: 768px){
        padding: 20px;
        display: flex;
        column-gap: 40px;
        align-items: center;
        font-size: 16px;
        .bookicon{
            width: 4%;
            height: 4%;
        }
        .titulo-cabecalho{
            font-size: 26px;
        }
    }
    @media (max-width: 425px){
        flex-direction: column;
        text-align: center;
        padding: 10px 2%;
        .titulo-cabecalho{
            font-size: 18px;
        }
        .paragrafo-cabecalho{
            font-size: 16px;
        }
        .bookicon{
            width: 10%;
            height: 10%;
            padding: 5px;
        }
    }
 `

 const Cabecalho = (props) =>{
    return(
        <>
            <Header className="cabecalho">
                <img className="bookicon" src="img/book.png" alt="icon livro" />
                <div>
                    <h1 className="titulo-cabecalho">{props.namebook}</h1>
                    <p className="paragrafo-cabecalho">Faça download deste livro aqui!</p>
                </div>
            </Header>
        </>
    )
 }
 export default Cabecalho;