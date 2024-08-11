import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Transacao = styled.div`
    width: 95%;
    min-height: 100px;
    height: fit-content;
    background-color: lightblue;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    h2{
        height: 30px;
    }
`;

const MainContainer = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Botao = styled.button`
    height: 80px;
    width: 200px;
    border-radius: 200px;
    // cursor: pointer;
    background-color: grey;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    h4{
        font-size: 22px;
        color: darkgreen;
    }

    &:hover {
        background-color: darkgrey;
    }
`;

const TransacoesContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;


const Body = () => {
    const [transacoes, setTransacoes] = useState([]);



    const handleClick = () => {
        setTransacoes([...transacoes, <TransacaoCard/>]);
    };

    return (
    <MainContainer>
        <Botao onClick={handleClick}>
            <h4>Adicionar transação</h4>
        </Botao>
        <TransacoesContainer>
            {transacoes.map((transacao) => (
            <Transacao>{transacao}</Transacao>
            ))}
        </TransacoesContainer>    
    </MainContainer>
    );
};

const TransacaoCard = () => {
    return (
        <Transacao>
            <Container>
            <h2>Exemplo</h2>
            <div  style={{ display: 'flex', alignItems: 'center' }}>
                <h4>Valor:</h4>
                <h3 style={{ marginLeft: '8px' }}>69,90</h3>
            </div>
            </Container>
            <h3>...</h3>
        </Transacao>
    );
};

export default Body;