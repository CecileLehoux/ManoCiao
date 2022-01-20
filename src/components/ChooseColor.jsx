import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import ColorPicker from "./ColorPicker";
import './button.css';

function ChooseColor() {
  const [woodSelectedButton, setWoodSelectedButton] = useState(true);
  const [pvcSelectedButton, setPvcSelectedButton] = useState(true);
  const [resineSelectedButton, setResineSelectedButton] = useState(true);
  const [stoneSelectedButton, setStoneSelectedButton] = useState(true);
  const [metalSelectedButton, setMetalSelectedButton] = useState(true);

  const woodOnClick = () => {
    setWoodSelectedButton(!woodSelectedButton)
  }
  const pvcOnClick = () => {
    setPvcSelectedButton(!pvcSelectedButton)
  }
  const resineOnClick = () => {
    setResineSelectedButton(!resineSelectedButton)
  }
  const stoneOnClick = () => {
    setStoneSelectedButton(!stoneSelectedButton)
  }
  const metalOnClick = () => {
    setMetalSelectedButton(!metalSelectedButton)
  }

  return (
    <div>
      <TextHolder>
        <h1>Rénover c'est un métier ! Mais on va vous aider !</h1> <br />
        <h3>
          Sélectionnez une couleur principale et des types de matériaux, on
          s'occupe du reste.
        </h3>
      </TextHolder>
      <SelectionContainer>
        <h2>1. Sélectionnez une couleur principale</h2>
        <ColorPicker />
      </SelectionContainer>
      <SelectionContainer>
        <h2>2. Sélectionnez des matériaux</h2>
        <div>
          <button class={woodSelectedButton ? "choosenbutton" : "clickedbutton"} onClick={woodOnClick} type="button">
            Bois
          </button>
          <button class={pvcSelectedButton ? "choosenbutton" : "clickedbutton"} onClick={pvcOnClick} type="button">
            PVC
          </button>
          <button class={resineSelectedButton ? "choosenbutton" : "clickedbutton"} onClick={resineOnClick} type="button">
            Résine
          </button>
          <button class={stoneSelectedButton ? "choosenbutton" : "clickedbutton"} onClick={stoneOnClick} type="button">
            Pierre
          </button>
          <button class={metalSelectedButton ? "choosenbutton" : "clickedbutton"} onClick={metalOnClick} type="button">
            Métal
          </button>
        </div>
      </SelectionContainer>
      <SelectionContainer>
        <h2>3. Sélectionnez une gamme de prix</h2>
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
      </SelectionContainer>
      <SelectionContainer>
        <Link to="/ProductsPagePurple">
          <Button type="button">Valider</Button>
        </Link>
      </SelectionContainer>
    </div>
  );
}

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 90%;
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
  padding: 1rem;
  margin: 0 1rem;
  @media screen and (max-width: 880px) {
    margin-bottom: 5px;
  }
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: none;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 1rem;
  margin: 0 0.5rem;
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

export default ChooseColor;
