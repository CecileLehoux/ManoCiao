import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ColorPicker = () => {
  const [colorHSVFromHex, setColorHSVFromHex] = useState([]);
  const [colorName, setColorName] = useState("");
  const [color, setColor] = useState("#FFFFFF");
  const [hexFormColor, setHexFormColor] = useState("#FFFFFF");

  const ColorPickerContainer = (props) => (
    <ColorContainer>
      <input type="color" {...props} />
    </ColorContainer>
  );

  const handleInput = (e) => {
    setColor(e.target.value);
  };

  useEffect(() => {
    setHexFormColor(color);
  }, [color]);

  useEffect(() => {
    console.log(hexFormColor);
    const transformHexColor = hexFormColor.replace("#", "");
    axios
      .get(`https://www.thecolorapi.com/id?hex=${transformHexColor}`)
      .then((res) => res.data)
      .then((data) => setColorHSVFromHex([data.hsv.h, data.hsv.s, data.hsv.v]))
      .catch((err) => console.log(err));
  }, [hexFormColor]);

  useEffect(() => {
    if (colorHSVFromHex[0] <= 5 && colorHSVFromHex[1] <= 5 && colorHSVFromHex[2] >= 95 ) {
      setColorName("Blanc");
    } else if (colorHSVFromHex[0] <= 5 && colorHSVFromHex[1] <= 5 && colorHSVFromHex[2] <= 5) {
      setColorName("Noir");
    } else if (colorHSVFromHex[1] <= 10 && colorHSVFromHex[2] >= 10) {
      setColorName("Gris");
    } else if (
      (colorHSVFromHex[0] >= 0 && colorHSVFromHex[0] <= 15) ||
      (colorHSVFromHex[0] >= 351 && colorHSVFromHex[0] <= 360)
    ) {
      setColorName("Rouge");
    } else if (
      (colorHSVFromHex[0] >= 16 && colorHSVFromHex[0] <= 20) ||
      (colorHSVFromHex[0] >= 36 && colorHSVFromHex[0] <= 45)
    ) {
      setColorName("Orange");
    } else if (colorHSVFromHex[0] >= 21 && colorHSVFromHex[0] <= 35) {
      setColorName("Marron");
    } else if (colorHSVFromHex[0] >= 46 && colorHSVFromHex[0] <= 65) {
      setColorName("Jaune");
    } else if (colorHSVFromHex[0] >= 66 && colorHSVFromHex[0] <= 160) {
      setColorName("Vert");
    } else if (colorHSVFromHex[0] >= 161 && colorHSVFromHex[0] <= 240) {
      setColorName("Bleu");
    } else if (colorHSVFromHex[0] >= 241 && colorHSVFromHex[0] <= 315) {
      setColorName("Violet");
    } else if (colorHSVFromHex[0] >= 316 && colorHSVFromHex[0] <= 350) {
      setColorName("Rose");
    }
  }, [colorHSVFromHex]);

  return (
    <div>
      <Container>
        <ColorPickerContainer onChange={handleInput} value={color} />
        <p>{colorName}</p>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  max-width: 150px;
  padding: 4px 12px;
  border: 1px solid #179e9f;
  border-radius: 4px;
`;

const ColorContainer = styled.div`
  

  input[type="color"] {
    margin: 8px;
    padding: 0;
    width: 2rem;
    height: 2rem;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    overflow: hidden;
    -webkit-appearance: none;
    cursor: pointer;
    background: none;
    border: 3px solid black;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 30px;
      height: 30px;
      border-radius: 50px;
    }
    &::-webkit-color-swatch {
      padding: 0;
    }
  }
`;

export default ColorPicker;
