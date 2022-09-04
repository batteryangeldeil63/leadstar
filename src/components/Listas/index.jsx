import React from "react";
import styled from "styled-components";

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .imagem{
        width: 5%;
        padding-right: 10px;
    }
    .lista{
        list-style-type: none;
    }
`

const Listas = (props) =>{
    return(
        <List>
            <img className="imagem" src="img/ok.png" alt="" />
            <li className="lista">{props.text}</li>
        </List>
    )
}
export default Listas;