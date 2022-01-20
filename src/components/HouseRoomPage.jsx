import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HouseRoomPage() {
    return (
        <>
            <Link to={'/ToDoPage'} >
                <ArrowHolder>
                    <RetourImg src='assets/arrowReturn.jpg' alt='retour' width='75%' />
                </ArrowHolder>
            </Link>
            <TextHolder>
                <h1>Choisissez une pièce </h1>
            </TextHolder>
            <ChoicesContainer>
                    <Link to={'/CategoryChoice'} >
                    <ChoiceHolder>
                        <h3>Chambre</h3>
                        <IconHolder>
                            <img src='assets/lampeIcone.png' alt='Chambre' width='65%' />
                        </IconHolder>
                    </ChoiceHolder>
                    </Link>
                    <Link to={'/CategoryChoice'} >
                    <ChoiceHolder>
                        <h3>Salle de bain</h3>
                        <IconHolder>
                            <img src='assets/DoucheIcone.png' alt='salledebain' width='75%' />
                        </IconHolder>
                    </ChoiceHolder>
                    </Link>
                    <Link to={'/CategoryChoice'} >
                    <ChoiceHolder>
                        <h3>Cuisine</h3>
                        <IconHolder>
                            <img src='assets/cuisineIcone.png' alt='Cuisine' width='65%' />
                        </IconHolder>
                    </ChoiceHolder>
                    </Link>
                    <Link to={'/CategoryChoice'} >
                    <ChoiceHolder>
                        <h3>Salon</h3>
                        <IconHolder>
                            <img src='assets/CanapeIcone.png' alt='Salon' width='75%' />
                        </IconHolder>
                    </ChoiceHolder>
                    </Link>
                    <Link to={'/CategoryChoice'} >
                    <ChoiceHolder>
                        <h3>Toilettes</h3>
                        <IconHolder>
                            <img src='assets/tuyauIcone.png' alt='Toilettes' width='65%' />
                        </IconHolder>
                    </ChoiceHolder>
                    </Link>
                    <Link to={'/CategoryChoice'} >
                    <ChoiceHolder>
                        <h3>Bureau</h3>
                        <IconHolder>
                            <img src='assets/priseIcone.png' alt='Bureau' width='75%' />
                        </IconHolder>
                    </ChoiceHolder>
                    </Link>
            </ChoicesContainer>
        </>
    )
}



const ArrowHolder = styled.div`
    border: solid 1px #179E9F;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    position: absolute;
    &:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
`
const TextHolder = styled.div`
display: flex;
flex-direction: row;
text-align: center;
justify-content: center;
align-items: center;
padding: none;
font-size: 13px;
`
const ChoicesContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
border-radius: 10px;
margin-left: 1rem;
margin-right: 1rem;
padding: 1rem;
height: 36rem;
`
const ChoiceHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
h3 {
    color: #179E9F;
    font-weight: bold;
    font-size: large;
}
&:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
`
const IconHolder = styled.div`
border-radius: 50%;
background-color: white;
border: 1px solid #179E9F;
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
const RetourImg = styled.img`
    height: 75%;

`


export default HouseRoomPage;