import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import UploadImg from "../datas/uploadImg";
import ColorThief from "./ColorThief";
import styled from "styled-components";
import ColorPage from "./ColorPage";

function ChooseImg() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState();

  const imgData = new FormData();

  
  const postImg = (data) => {
    const imaget = data.image[0];
    imgData.append("image", imaget);
    setImage(imaget)
    console.log(image)
    // UploadImg(imgData, setImage);
  };

  return (
    <div>
      {!image && <Form onSubmit={handleSubmit(postImg)} encType="multipart/form-data">
        <div>
          <LabelUpload htmlFor="image">
            Télécharger votre photo : <br/>
            <UploadInput
              type="file"
              name="image"
              {...register("image")}
            />
          </LabelUpload>
          <br />
        </div>
        <div>
          <InputSubmit value="Envoyer" type="submit" />
        </div>
      </Form>}
      {image && <ColorThief imageUrl={"/assets/"+image.name} />}
    </div>
  );
}

const UploadInput = styled.input`
    margin-top: 0;
    width: 10rem;
    font-size: 0.8em;
    font-family: 'Roboto', sans-serif;
`

const LabelUpload = styled.label`
    margin: auto;
`

const Form = styled.form`
    padding: auto;
`

const InputSubmit = styled.input`
    margin: 1em auto;
    width: 10rem;
    color: white;
    background-color: #1e3c87;
    border-radius: 10px;
    box-shadow: 2px 3px 3px black;
    font-size: 1.3em;
    font-family: 'Roboto', sans-serif;
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
    }
`

export default ChooseImg;
