import styled from "styled-components";

const Chamada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 50%;
    @media (max-width: 1024px){
        // nada
    }
    @media (max-width: 768px){
        flex-direction: row;
        align-items: center;
        text-align: center;
        column-gap: 30px;
        width: 100%;
    }
    @media (max-width: 425px){
        flex-direction: column;
        align-items: center;
        text-align: center; 
    }
`

export default Chamada;