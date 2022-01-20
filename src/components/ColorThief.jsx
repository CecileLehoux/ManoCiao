import Color, { Palette } from "color-thief-react";
import styled from "styled-components";
import ColorName from "../functions/ColorName";



const Loading = () => <div>Loading...</div>;

const ColorThief = (imageUrl) => {
        const imgSrc =imageUrl.imageUrl;
        console.log(imageUrl.imageUrl)
  return (
    <ColorThiefContainer>
      <ImageToUpload src={imgSrc} alt="" />
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
                    <strong><ColorName hexcolor={color} /> <Round color={color}></Round></strong>
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

const ImageToUpload = styled.img`
  margin: auto;
  max-width: 360px;
`

const Round = styled.div`
border: 2px solid black;
width: 20px;
height: 20px;
  border-radius: 50%;
  background-color: ${(e) => (e.color ? e.color : 'white')};
`

export default ColorThief;
