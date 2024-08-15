import React, { useState } from 'react';
import styled from 'styled-components';

const Body = () => {
    const [transacoes, setTransacoes] = useState([]);

    const handleClick = () => {
        setTransacoes([...transacoes, <TransacaoCard key={transacoes.length} />]);
    };

    return (
        <MainContainer>
            <Botao onClick={handleClick}>
                Adicionar transação
            </Botao>
            <TransacoesContainer>
                {transacoes.length ? transacoes.map((transacao, index) => (
                    <Transacao key={index}>{transacao}</Transacao>
                )) : 'Nenhuma transação para mostrar.'}
            </TransacoesContainer>
        </MainContainer>
    );
};

const TransacaoCard = () => {

    const [title, setTitle] = useState('Sorvetinho na Sesamo');
    const [valor, setValor] = useState('20,00');

    return (
        <Transacao>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px' }}>︙</div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '80%',
                height: '100%',
                minHeight: '80px'
            }}>
                <div style={{
                    fontSize: 20, textAlign: 'left', width: '90%'
                }}>{title}</div>
                <div style={{
                    display: 'flex',
                    width: '90%',
                    height: '80%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <div>Valor:</div>
                    <div>R${valor}</div>
                </div>
            </div>
        </Transacao>
    );
};

const Transacao = styled.div`
    width: 100%;
    min-height: 60px;
    height: fit-content;
    background-color: lightblue;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    align-items: space-between;
`;

const Botao = styled.div`
    height: 80px;
    width: 200px;
    border-radius: 200px;
    justify-self: center;
    align-self: center;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    background-color: darkgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px black;

    /* &:hover {
        background-color: grey;
    } */
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;

export default Body;