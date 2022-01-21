import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ColorPage({image, principal, palette}) {
  return (
    <>

      <TextHolder>
        <h1>Un camaïeu de couleurs</h1>
        {image}
        <h3>
          Voici un panel de couleurs choisies par nos soins en fonction de
          vos inspirations.
        </h3>
      </TextHolder>

      <Container>
        {/* <Image src="../../assets/couleurs.png" alt="panel" /> */}
        {principal}
        {palette}

        <Budget>
            <hr/>
          <h3>Enfin précisez-nous votre budget</h3>
        </Budget>
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
  margin-top: 2.5rem;
  h1 {
      font-size: 1.3rem;
      color:#179E9F ;
  }
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
  padding: 1.5rem;
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
  padding: 1rem;
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
const Budget = styled.div`
margin-top: 2rem;
hr {
    width: 80%;
   background-color : #179E9F;
   height: 3px;
}
`

const Image = styled.img`
  width: 30%;
  border-radius: 30px;
`;

export default ColorPage;
