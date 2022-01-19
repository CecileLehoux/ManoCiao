import { useState, useEffect } from "react";
import axios from "axios";

// Ajouter l'hex de la couleur récupérée en props
const ColorName = () => {
  const [colorHSVFromHex, setColorHSVFromHex] = useState([]);
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    axios
      // Remplacer la couleur hex en dur par la props
      .get(`https://www.thecolorapi.com/id?hex=FFC0CB`)
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
    }
    else if (
      (colorHSVFromHex[0] >= 0 && colorHSVFromHex[0] <= 15) ||
      (colorHSVFromHex[0] >= 356 && colorHSVFromHex[0] <= 360)
    ) {
      setColorName("Rouge");
    }
    else if (
      (colorHSVFromHex[0] >= 16 && colorHSVFromHex[0] <= 23) ||
      (colorHSVFromHex[0] >= 29 && colorHSVFromHex[0] <= 45)
    ) {
      setColorName("Orange");
    } else if (colorHSVFromHex[0] >= 24 && colorHSVFromHex[0] <= 28) {
      setColorName("Marron");
    } else if (colorHSVFromHex[0] >= 46 && colorHSVFromHex[0] <= 75) {
      setColorName("Jaune");
    } else if (colorHSVFromHex[0] >= 76 && colorHSVFromHex[0] <= 145) {
      setColorName("Vert");
    } else if (colorHSVFromHex[0] >= 146 && colorHSVFromHex[0] <= 255) {
      setColorName("Bleu");
    } else if (colorHSVFromHex[0] >= 256 && colorHSVFromHex[0] <= 315) {
      setColorName("Violet");
    } else if (colorHSVFromHex[0] >= 316 && colorHSVFromHex[0] <= 355) {
      setColorName("Rose");
    }
  }, [colorHSVFromHex]);

  return (
    <div>
      <p>{colorHSVFromHex}</p>
      <p>{colorName}</p>
    </div>
  );
};

export default ColorName;
