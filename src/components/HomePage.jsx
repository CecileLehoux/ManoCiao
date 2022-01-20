import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <TextHolder>
        <IconHolder>
          <img src="assets/MarteauIcone.png" alt="Salon" width="75%" />
        </IconHolder>
        <h1>Et si vous réalisiez votre projet à la Mano ?</h1>
        <h2>
          Nous sélectionnons, pour vous,<br/> <b>nos meilleurs articles</b><br/> en quelques
          clics.
        </h2>
      </TextHolder>

      <ChoicesContainer>
        <Link to={"/ToDoPage"}>
          <Button><b>C'est parti</b></Button>
        </Link>
      </ChoicesContainer>
    </>
  );
}

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 13px;
  line-height: 2.5em;
`;
const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #179e9f;
  border: 0;
  color: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  &:active {
    background-color: #fff;
    color: #179e9f;
    border: 1px solid #179e9f;
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
`;

const ChoiceHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const IconHolder = styled.div`
  border-radius: 50%;
  margin-top: 0 auto;
  flex-direction: row;
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

export default HomePage;
