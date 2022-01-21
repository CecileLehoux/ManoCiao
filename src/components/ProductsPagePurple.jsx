import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductsPagePurple() {
  return (
    <>
      <Link to="/ChooseColor">
        <ArrowHolder>
          <img src="assets/arrowReturn.jpg" alt="retour" width="75%" />
        </ArrowHolder>
      </Link>
      <TextHolder>
        <h1>Voici votre sélection</h1>
        <h3>
          Vos critères : rénovation, salle de bain, mobilier, dominante violette
        </h3>
      </TextHolder>
      <Container>
        <SousContainer>
          <a href="https://www.manomano.fr/p/meuble-simple-vasque-monza-aubergine-8284671">
            <p>Meuble de salle de bain Monza Aubergine</p>
            <Black>
              <b>639,00€</b>
            </Black>
            <Image src="../../assets/images/Violet1.jpg" alt="salle de bain" />
            <Button>Ajouter au panier</Button>
          </a>
        </SousContainer>

        <SousContainer>
          <a href="https://www.manomano.fr/p/meuble-double-vasque-aubergine-virtuose-duo-8284707">
            <p>Meuble de salle de bain Aubergine VIRTUOSE DUO</p>
            <Black>
              <b>799,00€</b>
            </Black>
            <Image src="../../assets/images/Violet2.jpg" alt="salle de bain" />
            <Button>Ajouter au panier</Button>
          </a>
        </SousContainer>
        <SousContainer>
          <a href="https://www.manomano.fr/p/meuble-double-vasque-monza-duo-aubergine-8284683">
            <p>Meuble de salle de bain Monza Duo Aubergine</p>
            <Black>
              <b>799,00€</b>
            </Black>
            <Image src="../../assets/images/Violet3.jpg" alt="salle de bain" />
            <Button>Ajouter au panier</Button>
          </a>
        </SousContainer>
      </Container>

      <TextHolder>
        <h2>Les produits complémentaires</h2>
      </TextHolder>
      <Container>
        <SousContainer2>
          <a href="https://www.manomano.fr/p/robinet-salle-de-bain-cascade-mitigeur-de-lavabo-en-laiton-robinet-a-deux-voies-chrome-design-moderne-8529401">
            <p>
              Robinet Salle de Bain Cascade Mitigeur de Lavabo en Laiton Robinet
              à Deux Voies Chromé Design Moderne
            </p>
            <Black>
              <b>39,99€</b>
            </Black>
            <Image
              src="../../assets/images/CompleSalleDeBain1.jpg"
              alt="salle de bain"
            />
            <Button>Ajouter au panier</Button>
          </a>
        </SousContainer2>
        <SousContainer2>
          <a href="https://www.manomano.fr/p/chauffe-eau-velis-evo-ariston-5899899?model_id=5899898">
            <p>
              Chauffe-eau electrique plat ARISTON VELIS EVO 65 litres, Ref.
              3626154 - Blanc
            </p>
            <Black>
              <b>412,21€</b>
            </Black>
            <Image
              src="../../assets/images/CompleSalleDeBain2.jpg"
              alt="salle de bain"
            />
            <Button>Ajouter au panier</Button>
          </a>
        </SousContainer2>
        <SousContainer2>
          <a href="https://www.manomano.fr/p/grt-800-thm-douche-ens-douche-6570301">
            <p>
              GROHE Grohtherm 800 Mitigeur thermostatique douche 1/2" avec
              ensemble de douche
            </p>
            <Black>
              <b>143,67€</b>
            </Black>
            <Image
              src="../../assets/images/CompleSalleDeBain3.jpg"
              alt="salle de bain"
            />
            <Button>Ajouter au panier</Button>
          </a>
        </SousContainer2>
      </Container>
    </>
  );
}

const TextHolder = styled.div`
  display: block;
  text-align: center;
  padding: none;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 10px;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  width: 63%;
  margin: 0 auto;
  gap: 4rem;
  @media screen and (max-width: 880px) {
    width: 80%;
  }
`;
const Black = styled.p`
  color: #000000;
`;

const SousContainer = styled.div`
  justify-content: space-around;
  width: 38%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  a {
    text-decoration: none;
    color: #179e9f;
  }
  @media screen and (max-width: 880px) {
    width: 85%;
  } ;
`;

const SousContainer2 = styled.div`
  justify-content: space-around;
  width: 20%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  a {
    text-decoration: none;
    color: #179e9f;
  }
  @media screen and (max-width: 880px) {
    width: 85%;
  }
  img {
    height: auto;
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #179e9f;
  border: 1px solid #fff;
  color: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  margin-top: 1rem;
  &:hover {
    background-color: #fff;
    color: #179e9f;
    border: 1px solid #179e9f;
  }
`;

const Image = styled.img`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: auto;
`;

const ArrowHolder = styled.div`
  border: solid 1px #179e9f;
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
`;

export default ProductsPagePurple;
