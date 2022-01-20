import { useState, useEffect } from "react";
import axios from "axios";

// Ajouter l'hex de la couleur récupérée en props
const ColorName = () => {
  const [colorHSVFromHex, setColorHSVFromHex] = useState([]);
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    axios
      // Remplacer la couleur hex en dur par la props
      .get(`https://www.thecolorapi.com/id?hex=#dec014)`)
      .then((res) => res.data)
      .then((data) => setColorHSVFromHex([data.hsv.h, data.hsv.s, data.hsv.v]))
      .then(console.log(colorHSVFromHex))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (colorHSVFromHex[1] === 0 && colorHSVFromHex[2] > 95) {
      setColorName("Blanc");
    } else if (colorHSVFromHex[1] === 0 && colorHSVFromHex[2] < 5) {
      setColorName("Noir");
    } else if (
      colorHSVFromHex[1] === 0 &&
      colorHSVFromHex[2] >= 5 &&
      colorHSVFromHex[2] <= 95
    ) {
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
      <p>{colorName}</p>
    </div>
  );
};

export default ColorName;
