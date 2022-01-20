import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HomePage() {

    return (
        <>
            <TextHolder>
                <h1>Et si vous réalisiez votre projet à la Mano ?</h1>
                <h2>Nous sélectionnons, pour vous, nos meilleurs articles en quelques clics.</h2>
            </TextHolder>
            <ChoicesContainer>
                <Link to={'/ToDoPage'} >
                    <ChoiceHolder>
                        <h3>C'est parti !</h3>
                        <img src='assets/white-arrow.png' width='10%' />
                    </ ChoiceHolder>
                </Link>
            </ChoicesContainer>
            
        </>
    )
}

const TextHolder = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
const ChoicesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #179E9F;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
`
const ChoiceHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
        color: white;
        font-weight: bold;
        font-size: large;
        text-align: center;
        margin-right: 1rem;
    }
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
    }
`


export default HomePage;
