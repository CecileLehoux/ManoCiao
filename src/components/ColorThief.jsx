import Color, { Palette } from "color-thief-react";
import styled from "styled-components";
import ColorName from "../functions/ColorName";


const Loading = () => <div>Loading...</div>;

const ColorThief = () => {
  const imgSrc = "http://ekladata.com/kRyR4CJUacmCnlEc-_pILyWpo0s@390x318.jpg";
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
                {data.map((color, index) => (
                  <li key={index} style={{ color: color }}>
                    <strong><ColorName hexcolor={color} /> ({color})</strong>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Palette>
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
