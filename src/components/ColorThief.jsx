import Color, { Palette } from "color-thief-react";
import styled from "styled-components";
import ColorName from "../functions/ColorName";
import ColorPicker from "./ColorPicker";


const Loading = () => <div>Loading...</div>;

const ColorThief = () => {
  const imgSrc = "assets/cuisine.jpg";
  return (
    <ColorThiefContainer>
      <img src={imgSrc} alt="" />
      <Color src={imgSrc} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div>
              La couleur principale est : <strong style={{ color: data }}><ColorName hexcolor={data} /> ({data})</strong>
            </div>
          );
        }}
      </Color>
      <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div>
              Les couleurs à associer sont :
              <ul>
                {data.slice(1).map((color, index) => (
                  <li key={index} style={{ color: color }}>
                    <strong><ColorName hexcolor={color} /> ({color})</strong>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Palette>
      <ColorPicker />
    </ColorThiefContainer>
  );
};

const ColorThiefContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ColorThief;
