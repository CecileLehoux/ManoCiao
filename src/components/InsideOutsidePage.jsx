import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function InsideOutsidePage() {

    return (
        <>
            <TextHolder>
                <h1>Et si vous réalisiez votre projet à la Mano ?</h1>
                <h2>Quel est votre projet ?</h2>
            </TextHolder>
            <ChoicesContainer>
                    <ChoiceHolder>
                        <h3>Extérieur</h3>
                        <IconHolder>
                            <img src='assets/potExterieur.png' alt='exterieur' width='65%' />
                        </IconHolder>
                    </ChoiceHolder>
                <Link to={'/RoomChoice'} >
                    <ChoiceHolder>
                        <h3>Intérieur</h3>
                        <IconHolder>
                            <img src='assets/CanapeIcone.png' alt='interieur' width='75%' />
                        </IconHolder>
                    </ChoiceHolder>
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
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        padding: 5px;
    }
`


export default InsideOutsidePage;