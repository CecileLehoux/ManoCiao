import axios from "axios";

const UploadImg = async (imgData, setImage) => {
  await axios
    .post("http://localhost:5000/upload", imgData)
    .then(res=>res.data)
    .then((response) => setImage(response))
    .catch((err) => console.log(err));
};

export default UploadImg;
