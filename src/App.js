import React from "react";
import Color, { Palette } from "color-thief-react";

const Loading = () => <div>Loading...</div>;
export default function App() {
  const imgSrc =
    "http://ekladata.com/kRyR4CJUacmCnlEc-_pILyWpo0s@390x318.jpg";
  return (
    <div className="App">
      <Color src={imgSrc} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div>
              Predominant color: <strong>{data}</strong>
            </div>
          );
        }}
      </Color>
      <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div>
              Palette:
              <ul>
                {data.map((color, index) => (
                  <li key={index} style={{ color: color }}>
                    <strong>{color}</strong>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Palette>
      <img src={imgSrc} alt="" />
    </div>
  );
}
