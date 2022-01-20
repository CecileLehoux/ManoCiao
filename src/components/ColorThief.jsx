import { useState } from "react";
import Color, { Palette } from "color-thief-react";
import styled from "styled-components";
import ColorName from "../functions/ColorName";
import ColorPage from "./ColorPage";

const Loading = () => <div>Loading...</div>;

const ColorThief = (imageUrl) => {
  const imgSrc = imageUrl.imageUrl;
  const [colorNameShown, setColorNameShown] = useState(false);

  return (
    <ColorThiefContainer>
      <ColorPage
        image={<ImageToUpload src={imgSrc} alt="" />}
        principal={
          <Color src={imgSrc} crossOrigin="anonymous" format="hex">
            {({ data, loading }) => {
              if (loading) return <Loading />;
              return (
                <div>
                  La couleur principale est :{" "}
                  <strong style={{ color: data }}>
                    <ColorName hexcolor={data} />
                  </strong>
                </div>
              );
            }}
          </Color>
        }
        palette={
          <Palette
            src={imgSrc}
            crossOrigin="anonymous"
            format="hex"
            colorCount={4}
          >
            {({ data, loading }) => {
              if (loading) return <Loading />;
              return (
                <div>
                  Les couleurs à associer sont :
                  <RoundContainer>
                    {data.map((color, index) => (
                      <strong>
                        <Round
                          onMouseEnter={() => setColorNameShown(true)}
                          onMouseLeave={() => setColorNameShown(true)}
                          color={color}
                          ></Round>
                          {/* {colorNameShown && <ColorName hexcolor={color} />} */}
                      </strong>
                    ))}
                  </RoundContainer>
                </div>
              );
            }}
          </Palette>
        }
      />
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
`;

const RoundContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const Round = styled.div`
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${(e) => (e.color ? e.color : "white")};
`;

export default ColorThief;
