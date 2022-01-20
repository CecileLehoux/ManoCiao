import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    setImage(imaget);
    console.log(image);
    // UploadImg(imgData, setImage);
  };

  return (
    <div>
      {!image && (
        <Form onSubmit={handleSubmit(postImg)} encType="multipart/form-data">
          <div>
            <LabelUpload htmlFor="image">
              Télécharger votre photo : <br />
              <UploadInput type="file" name="image" {...register("image")} />
            </LabelUpload>
            <br />
          </div>
          <div>
            <InputSubmit value="Envoyer" type="submit" />
          </div>
        </Form>
      )}
      {image && <ColorThief imageUrl={"/assets/" + image.name} />}
      <Link to="/CurrationPage">
        <ButtonBg>
          Je n'ai pas d'idée, <br />
          je fais confiance à Mano Mano
        </ButtonBg>
      </Link>
    </div>
  );
}

const UploadInput = styled.input`
  margin-top: 0;
  width: 10rem;
  font-size: 0.8em;
  font-family: "Roboto", sans-serif;
  outline-style: none;
`;
const Container = styled.div`
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 880px) {
    width: 90%;
  }
`;

const LabelUpload = styled.label`
  margin: auto;
  margin-top: 2rem;
  line-height: 2rem;
`;

const Form = styled.form`
  padding: auto;
`;

const InputSubmit = styled.input`
  margin: 1em auto;
  width: 10rem;
  color: white;
  border: 0;
  background-color: #179e9f;
  border-radius: 10px;
  font-size: 1.3em;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: none;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #179e9f;
  border: 1px solid #fff;
  color: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  margin-top: 1rem;
  &:hover {
    background-color: #fff;
    color: #179e9f;
    border: 1px solid #179e9f;
  }
`;
const ButtonBg = styled.button`
  padding: 0.5rem;
  background-color: #fff;
  color: #179e9f;
  border: 1px solid #179e9f;
  border-radius: 10px;
  font-size: 16px;
  margin-top: 1rem;
  &:hover {
    background-color: #179e9f;
    border: 1px solid #fff;
    color: #ffffff;
  }
`;

export default ChooseImg;
