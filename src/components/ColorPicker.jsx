import React, { useState } from "react";
import styled from "styled-components";
import ColorName from "../functions/ColorName";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  width: 150px;
  max-width: 150px;
  padding: 4px 12px;
  border: 1px solid #bfc9d9;
  border-radius: 4px;

  input[type="color"] {
    margin-right: 8px;
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 14px;
      height: 14px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #bfc9d9;
      border-radius: 4px;
      padding: 0;
    }
  }

  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 14px;
  }
`;

const ColorPickerContainer = (props) => (
  <Container>
    <input type="color" {...props} />
    <input type="text" {...props} />
  </Container>
);

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  const [hexFromColor, setHexFromColor] = useState("#FFFFFF");

  const handleInput = (e) => {
    setColor(e.target.value);
    setHexFromColor(e.target.value);
  };

  return (
    <div className="App">
      <ColorPickerContainer onChange={handleInput} value={color} />
      <ColorName hexcolor={hexFromColor} />
    </div>
  );
};

export default ColorPicker;
