import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ColorPageCurration({ image, principal, palette }) {
  return (
    <>
      <TextHolder>
        <h1>Découvrez notre sélection de couleur pour votre intérieur</h1>
        {image}
        <h3>
          Voici un panel de couleur séléctionner par nos soins en fonction de
          vos inspirations
        </h3>
      </TextHolder>
      <PreContainer>
      <Title2>Salon industriel</Title2>
      <Image src="../../assets/images/salon-industriel.jpeg" alt="salon1" />
      </PreContainer>
      <Container>
        <Image src="../../assets/couleurs.png" alt="panel" />

        <Budget>
          <hr />
          <h3>Enfin précisez-nous votre budget</h3>
        </Budget>
        <div>
          <Ul>
            <Li>
              <input type="radio" />
              100€ à 550€
            </Li>
            <Li>
              <input type="radio" />
              550€ à 1000€
            </Li>
            <Li>
              <input type="radio" />+ de 1000€
            </Li>
          </Ul>
        </div>
        <div>
          <Link to={"/ProductsPage"}>
            <Button>Découvrez votre salon personnalisé</Button>
          </Link>
        </div>
      </Container>
    </>
  );
}

const PreContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: none;
  h1 {
    font-size: 1.3rem;
    color: #179e9f;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #179e9f;
  border: 0;
  color: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  &:active {
    background-color: #fff;
    color: #179e9f;
    border: 1px solid #179e9f;
  }
`;

const Container = styled.div`
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  margin: 0 auto;
  @media screen and (max-width: 880px) {
    width: 90%;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  margin: 0 auto;
  padding: 2rem;
  @media screen and (max-width: 880px) {
    flex-direction: column;
    margin-bottom: 5px;
  }
`;
const Li = styled.li`
  list-style-type: none;
  text-decoration: none;
  border: 1px solid #179e9f;
  border-radius: 10px;
  padding: 1.5rem;
  @media screen and (max-width: 880px) {
    margin-bottom: 5px;
  }
`;

const active = styled.a`
  &:hover {
    background-color: #179e9f;
    color: #fff;
    border: 1px solid #179e9f;
  }
`;
const Budget = styled.div`
  margin-top: 2rem;
  hr {
    width: 40%;
    background-color: #179e9f;
    height: 3px;
  }
`;

const Image = styled.img`
  width: 30%;
  border-radius: 30px;
  @media screen and (max-width: 880px) {
    width: 90%;
  }
`;

const Title2 = styled.h3`
  text-align: center;
  @media screen and (max-width: 880px) {
    width: 21rem;
  }
`;

export default ColorPageCurration;
