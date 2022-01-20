import axios from "axios";

const UploadImg = async (imgData, setImage) => {
  await axios
    .post("http://localhost:5000/upload", imgData)
    .then((response) => setImage(response.data))
    .catch((err) => console.log(err));
};

export default UploadImg;
