import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ToDoPage() {

    return (
        <>
            <TextHolder>
                <h1>Que souhaitez-vous faire ?</h1>
            </TextHolder>
            <ChoicesContainer>
                    <ChoiceHolder>
                        <h3>#Rénovation</h3>
                        <IconHolder>
                            <img src='assets/PinceauIcone.png' alt='exterieur' width='65%' />
                        </IconHolder>
                    </ChoiceHolder>
                    <ChoiceHolder>
                        <h3>#Réparation</h3>
                        <IconHolder>
                            <img src='assets/MarteauIcone.png' alt='interieur' width='75%' />
                        </IconHolder>
                    </ChoiceHolder>
                    <ChoiceHolder>
                        <h3>#Staging</h3>
                        <IconHolder>
                            <img src='assets/lampeIcone.png' alt='interieur' width='75%' />
                        </IconHolder>
                    </ChoiceHolder>
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
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #179E9F;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
    padding-bottom: 2rem
`
const ChoiceHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h3 {
        color: white;
        font-weight: bold;
        font-size: x-large;
    }
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
    }
`
const IconHolder = styled.div`
    border-radius: 50%;
    background-color: white;
    width: 8rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        padding: 5px;
    }
`


export default ToDoPage;