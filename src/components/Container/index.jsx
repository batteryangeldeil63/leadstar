import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 768px){
        flex-direction: column;
        text-align: center;
    }
`

export default Container;