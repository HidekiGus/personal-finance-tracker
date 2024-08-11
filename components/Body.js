import React, { useState } from 'react';
import styled from 'styled-components';

const Body = () => {
    const [transacoes, setTransacoes] = useState([]);

    const handleClick = () => {
        setTransacoes([...transacoes, <TransacaoCard key={transacoes.length}/>]);
    };

    return (
    <>
    <h1>Body here</h1>
    <MainContainer>
        <Botao onClick={handleClick}>
            Adicionar transação
        </Botao>
        <TransacoesContainer>
            {transacoes.map((transacao, index) => (
            <Transacao key={index}>{transacao}</Transacao>
            ))}
        </TransacoesContainer>    
    </MainContainer>
    </>
    );
};

const TransacaoCard = () => {
    return (
        <Transacao>
            <h2>Exemplo</h2>
            <h4>Valor:</h4>
            <h3>69,90</h3>
            <h3>editar x</h3>
        </Transacao>
    );
};

const Transacao = styled.div`
    width: 160px;
    min-height: 260px;
    height: fit-content;
    background-color: lightblue;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
`;

const Botao = styled.button`
    height: 80px;
    width: 200px;
    border-radius: 200px;
    justify-self: center;
    align-self: center;
    font-size: 22px;
    cursor: pointer;

    &:hover {
        background-color: grey;
    }
`;

const MainContainer = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
`;

const TransacoesContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;





export default Body;