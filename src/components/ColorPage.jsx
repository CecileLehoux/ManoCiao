import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ColorPage() {
  return (
    <>
      <TextHolder>
        <h1>Notre sélection de couleur</h1>
        <h3>
          Voici un panel de couleur séléctionner par nos soins en fonction de
          vos inspirations
        </h3>
      </TextHolder>

      <Container>
        <Image src="../../assets/couleurs.png" alt="panel" />

        <div>
          <h3>Enfin precisez-nous votre budget</h3>
        </div>
        <div>
          <Ul>
      
            <Li><input type="radio"/>100€ à 550€</Li>
            <Li><input type="radio"/>550€ à 1000€</Li>
            <Li><input type="radio"/>+ de 1000€</Li>
          </Ul>
        </div>
        <div>
        <Link to={'/ProductsPage'} >
          <Button>Découvrez votre salon personnalisé</Button>
        </Link>
        </div>
      </Container>
    </>
  );
}

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: none;
`;

const Button = styled.button`
padding: 1rem;
background-color:#179E9F ;
border: 0;
color: #ffffff;
border-radius:10px;
font-size: 16px;
&:active {
    background-color: #fff;
    color:#179E9F ;
    border: 1px solid #179E9F ;
}
`

const Container = styled.div`
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  width: 100%;
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
  margin-bottom : 5px;
}
`;
const Li = styled.li`
  list-style-type: none;
  text-decoration: none;
  border: 1px solid #179E9F;
  border-radius:10px;
  padding: 1.5rem;
  @media screen and (max-width: 880px) {
  margin-bottom : 5px;
}
`;

const active = styled.a`
&:hover {
    background-color: #179E9F;
    color:#fff ;
    border: 1px solid #179E9F ;
}
`


const Image = styled.img`
  width: 30%;
  border-radius: 30px;
`;

export default ColorPage;
