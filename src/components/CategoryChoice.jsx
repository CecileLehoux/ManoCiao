import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

function CategoryChoice() {
  return (
    <>
      <Link to={'/RoomChoice'} >
                <ArrowHolder>
                    <img src='assets/arrowReturn.jpg' alt='retour' width='75%' />
                </ArrowHolder>
            </Link>
      <TextHolder>
        <h1>Aménager votre salon</h1>
        <img
          src="assets/CanapeIcone.png"
          alt="canape"
          width="100px"
          height="100px"
        />{" "}
        <br />
        Que recherchez vous ?
      </TextHolder>
      <ChoicesContainer>
        <ChoiceHolder>
          <IconHolder>
            <TitleIcon>Luminaires</TitleIcon>
          </IconHolder>
        </ChoiceHolder>
        <ChoiceHolder>
          <IconHolder>
            <Link to="/ChooseImg">
              <TitleIcon>Meubles de confort</TitleIcon>
            </Link>
          </IconHolder>
        </ChoiceHolder>
        <ChoiceHolder>
          <IconHolder>
            <TitleIcon>Table et chaises</TitleIcon>
          </IconHolder>
        </ChoiceHolder>
        <ChoiceHolder>
          <IconHolder>
            <TitleIcon>Buffets et consoles</TitleIcon>
          </IconHolder>
        </ChoiceHolder>
      </ChoicesContainer>
    </>
  );
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
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: none;
  color:#179e9f;
`;

const ChoicesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  border-radius: 10px;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  height: 80%;
  @media screen and (min-width: 880px) {
    width: 50%;
    margin: 0 auto;
    height: auto;
    margin-top: 2rem;
}
`;

const ChoiceHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const IconHolder = styled.div`
  border-radius: 50%;
  background-color: white;
  border: 1px solid #179e9f;
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    padding: 5px;
  }
`;

const TitleIcon = styled.h1`
  text-align: center;
  color: black;
  font-size: 14px;
  color:#179e9f;
`;

export default CategoryChoice;
