import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const BoxForm = styled.form`
    width: 60%;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: -5px 5px 10px #7fa4ce;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    padding: 20px 10px;
    @media (max-width: 768px){
        padding: 20px 15px;
        margin-right: 10px;
        width: 80%;
    }
    @media (max-width: 320px){
        .botao-enviar{
            font-size: 16px;
        }
        .botao-reset{
            font-size: 16px;
        }
    }
    h2{
        margin: 0 0 20px 0;
    }
    input{
        width: 70%;
        padding: 10px 30px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: none;
        background-color: #cce3fd;
    }
    .botao-enviar{
        background-color: #ff9900;
        color: white;
        font-weight: normal;
        font-size: 16px;
        border-radius: 5px;
        padding: 5px 20px;
        border: none;
        cursor: pointer;
    }
    .botao-reset{
        background-color: transparent;
        color: #ff9900;
        font-weight: normal;
        font-size: 16px;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #ff9900;
        cursor: pointer;
    }
    .botoes{
        column-gap: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const Formulario = () =>{
    const { register, handleSubmit } = useForm();

    const onSubmit = (e) =>{
        console.log(e);
    }
    return(
         <BoxForm onSubmit={handleSubmit(onSubmit)}>
            <h2>Preencha os campos para fazer download</h2>
            <input
                placeholder="Nome completo*"
                className="nome"
                {...register('nome')}
            />
            <input 
                placeholder="E-mail envio do PDF"
                className="email"
                {...register('email')}
            />
            <input
                placeholder="Celular"
                className="celular" 
                {...register('celular')}
            />
            <div className="botoes">
                <button className="botao-enviar" type="submit">Download aqui</button>
                <button className="botao-reset" type="reset">Limpar Formulário</button>
            </div>
         </BoxForm>
    )
}

export default Formulario;