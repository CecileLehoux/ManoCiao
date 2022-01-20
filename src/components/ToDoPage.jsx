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
                        <h3>#Staging</h3>
                        <IconHolder>
                            <img src='assets/lampeIcone.png' alt='interieur' width='75%' />
                        </IconHolder>
                    </ChoiceHolder>
            </ChoicesContainer>
            <hr/>
            <TextHolder>
                <h1>De quel projet s'agit-il ?</h1>
            </TextHolder>
            <ChoicesContainer>
                    <ChoiceHolder>
                        <h3>Extérieur</h3>
                        <IconHolder>
                            <img src='assets/potExterieur.png' alt='exterieur' width='65%' />
                        </IconHolder>
                    </ChoiceHolder>
                    <ChoiceHolder>
                        <Link to={'/RoomChoice'} >
                            <h3>Intérieur</h3>
                            <IconHolder>
                                <img src='assets/CanapeIcone.png' alt='interieur' width='75%' />
                            </IconHolder>
                        </Link>
                    </ChoiceHolder>
            </ChoicesContainer>
        </>
    )
}
//<ChoiceHolder>
  //                      <h3>#Réparation</h3>
    //                    <IconHolder>
      //                      <img src='assets/MarteauIcone.png' alt='interieur' width='75%' />
        //                </IconHolder>
          //          </ChoiceHolder>
const TextHolder = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 13px;
`

const ChoicesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
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
    width: 30%;
    h3 {
        font-weight: bold;
        font-size: large;
        text-align: center;
    }
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
        }
    &:hover h3 {
        color: #1e3c87;
    }
`

const IconHolder = styled.div`
    border-radius: 50%;
    background-color: white;
    border: 1px solid #179E9F;
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        padding: 5px;
    }
    &:hover {
        border: 3px solid #1e3c87;
        transition: 0.3s;
        
    }
`

export default ToDoPage;
