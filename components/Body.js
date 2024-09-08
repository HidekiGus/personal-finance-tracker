import React, { useState } from 'react';
import styled from 'styled-components';

const Body = () => {
    const [transacoes, setTransacoes] = useState([]);

    const handleClick = () => {
        setTransacoes([...transacoes, <TransacaoCard key={transacoes.length} />]);
    };

    const [title, setTitle] = useState('');
    const [valor, setValor] = useState(null);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleValorChange = (e) => setValor(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTransacoes([<TransacaoCard titulo={title} valorEntrada={valor} key={transacoes.length} />, ...transacoes]);
        setTitle('');
        setValor(null);
    };

    return (
        <MainContainer>
            <form style={{
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'space-evenly',
            }} onSubmit={handleSubmit}>
                <div style={{ width: '80%' }}>
                    <label>Título:</label>
                    <input style={{
                        height: '35px',
                        backgroundColor: 'lightgrey',
                        borderRadius: '8px',
                        paddingLeft: '10px',
                        fontSize: '18px',
                        marginLeft: '5px'
                    }} placeholder="Insira o título aqui" type="text" value={title} onChange={handleTitleChange} required />
                </div>
                <div style={{ width: '80%' }}>
                    <label>Valor:</label>
                    <input style={{
                        height: '35px',
                        backgroundColor: 'lightgrey',
                        borderRadius: '8px',
                        paddingLeft: '10px',
                        fontSize: '18px',
                        marginLeft: '5px'
                    }} placeholder="Insira o valor aqui" type="number" step=".01" value={valor} onChange={handleValorChange} required />
                </div>
                <button style={{
                    height: '80px',
                    width: '200px',
                    borderRadius: '200px',
                    justifySelf: 'center',
                    alignSelf: 'center',
                    fontSize: '24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'darkgrey',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 5px black',
                    marginTop: '20px'
                }} type="submit">Adicionar</button>
            </form>
            {/* <Botao onClick={handleClick}>
                Adicionar transação
            </Botao> */}
            <TransacoesContainer>
                {transacoes.length ? transacoes.map((transacao, index) => (
                    <Transacao key={index}>{transacao}</Transacao>
                )) : 'Nenhuma transação para mostrar.'}
            </TransacoesContainer>
        </MainContainer >
    );
};

const TransacaoCard = ({ titulo, valorEntrada }) => {

    const [title, setTitle] = useState(titulo);
    const [valor, setValor] = useState(String(valorEntrada).replace(".", ","));

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
                    <div>R$ {valor}</div>
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

    form {
        width: 80%;
        margin: 0 auto;
    }

    label,
    input {
        /* In order to define widths */
        display: inline-block;
    }

    label {
        width: 30%;
        /* Positions the label text beside the input */
        text-align: right;
    }

    label+input {
        width: 88%;
    }

    /* Only the submit button is matched by this selector,
        but to be sure you could use an id or class for that button */

    input+input {
        float: right;
    }
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