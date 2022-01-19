import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs';

const ColorThiefContainer = () => {
  const colorThief = new ColorThief();
  const img = document.querySelector("img");

  if (img.complete) {
    colorThief.getColor(img);
  } else {
    img.addEventListener("load", function () {
      colorThief.getColor(img);
    });
  }
  return (
    <div>
      <img src='ressource/Limbo.jpg' alt='Limbo'/>
    </div>
  )
};

export default ColorThiefContainer;
