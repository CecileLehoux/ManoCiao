import Color, { Palette } from "color-thief-react";

const Loading = () => <div>Loading...</div>;

const ColorThief = () => {
        const imgSrc =
    "http://ekladata.com/kRyR4CJUacmCnlEc-_pILyWpo0s@390x318.jpg";
  return (
    <div>
        <img src={imgSrc} alt="" />
      <Color src={imgSrc} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div>
              La couleur principale est : <strong>{data}</strong>
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
                    <strong>{color}</strong>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Palette>
      
    </div>
  );
}

export default ColorThief;