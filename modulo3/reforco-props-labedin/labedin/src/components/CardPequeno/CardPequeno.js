import React from 'react';
import styled from "styled-components"

const SmallcardContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 100px;


img {
width: 30px;
margin-right: 10px;

}
`
function CardPequeno(props) {
    return (
        <div>
        <SmallcardContainer>
            <img src={ props.imagem1 } />
                <p><b>E-mail:</b> { props.email }</p>
                </SmallcardContainer>
            <SmallcardContainer className="smallcard-container">
            <img src={ props.imagem2 } />
                <p><b>Endereço:</b> { props.endereço }</p>
            </SmallcardContainer>
        </div>
    )
}

export default CardPequeno;