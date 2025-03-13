import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addTransaction, getTransactions, API_URL } from '../utils/api';

const Body = () => {
    const [transacoes, setTransacoes] = useState([]);
    const [data, setData] = useState([]);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [tipo, setTipo] = useState('');

    //Group of handlers-------------------------------------------------\\
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleAmountChange = (e) => setAmount(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleTypeChange = (e) => setTipo(e.target.value);
    //------------------------------------------------------------------//


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}`).then((res) => { return res.json() });
                console.log(response);
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Fetch data on component mount
    }, []); // Empty dependency array for initial fetch

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !amount) {
            alert('Título e Valor são obrigatórios.');
            return; // Prevent submission if required fields are empty
        }

        try {
            await addTransaction({ title, amount, category, tipo });
            setTitle('');
            setAmount('');
            setCategory('');
            setTipo('');
        } catch (error) {
            console.error('Error adding transaction:', error);
            alert('Error adding transaction. Please try again.');
        }
    };

    return (
        <MainContainer>
            <Formulario onSubmit={handleSubmit}>
                <Field>
                    <Input placeholder="Insira o título aqui" type="text" value={title}
                        onChange={handleTitleChange} required />
                </Field>
                <Field>
                    <Input placeholder="Insira o valor aqui" type="text" value={amount}
                        onChange={handleAmountChange} required />
                </Field>
                <Field>
                    <Input placeholder="Insira a categoria aqui" type="text" value={category}
                        onChange={handleCategoryChange} />
                </Field>
                <Field>
                    <Input placeholder="Gasto/Ganho/Investimento" type="text" value={tipo}
                        onChange={handleTypeChange} />
                </Field>
                <Button type="submit">Adicionar</Button>
            </Formulario>
            <TransacoesContainer>
                {data.length ? (data.map((transacao, index) => (
                    <TransacaoCard key={index} titulo={transacao.title} valorEntrada={transacao.amount}>{transacao}</TransacaoCard>
                ))) : 'Nenhuma transação para mostrar.'}
            </TransacoesContainer>
        </MainContainer >
    );
};

const TransacaoCard = ({ titulo, valorEntrada }) => {

    const [title, setTitle] = useState(titulo);
    const [valor, setValor] = useState(valorEntrada);

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
                <div style={{ fontSize: 20, textAlign: 'left', width: '90%' }}>
                    {title}
                </div>
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
    width: 94%;
    min-height: 60px;
    height: fit-content;
    background-color: lightblue;
    border-radius: 25px;
    padding: 5px;
    margin-bottom: 7px;
    margin-top: 7px;
    border: 1px solid rgba(0, 178, 255, 0.15);
    box-shadow: 1px 1px rgba(122, 122, 122, 0.4);

    display: flex;
    flex-direction: row;
    align-items: space-between;
`;

const MainContainer = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    padding-top: 10px;
    border-radius: 10px;
    width: 97vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: rgba(122, 122, 122, 0.4);
`;

const Input = styled.input`
    height: 35px;
    background-color: lightgrey;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 18px;
    margin-left: 5px;
    width: 90%;

    ::placeholder {
        color: #888;
        font-style: italic;
    }
`;

const Button = styled.button`
    height: 60px;
    width: 220px;
    border-radius: 10px;
    justify-self: center;
    align-self: center;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    background-color: darkgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px darkgrey;
    margin-top: 20px;
`;

const Field = styled.div`
    margin: 5px 0;
`;

const Formulario = styled.form`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
`;

export default Body;