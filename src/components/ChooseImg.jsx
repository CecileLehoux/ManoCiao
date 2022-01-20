import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
      <Link to={'/CategoryChoice'} >
                <ArrowHolder>
                    <img src='assets/arrowReturn.jpg' alt='retour' width='75%' />
                </ArrowHolder>
      </Link>
      <TextHolder>
        <h1>Avez-vous une inspiration à nous partager ?</h1>
        <h3>
          En fonction de votre photo, nous selectionnerons un panel de couleur
        </h3>
      </TextHolder>
      <Container>
        {!image && (
          <Form onSubmit={handleSubmit(postImg)} encType="multipart/form-data">
            <CarreBleu>
              <LabelUpload htmlFor="image">
                Télécharger votre photo
                <UploadInput
                  type="file"
                  name="image"
                  id="image"
                  {...register("image")}
                />
              </LabelUpload>
              <br />

              <div>
                <InputSubmit value="Envoyer" type="submit" />
              </div>
            </CarreBleu>
          </Form>
        )}
        {image && <ColorThief imageUrl={"/assets/" + image.name} />}
        {image ? (
          <div></div>
        ) : (
          <>
            <TextHolder>
              <h1>Je n'ai pas d'idée ?</h1>
            </TextHolder>
            <Link to="/CurrationPage">
              <ButtonBg>Je fais confiance à Mano Mano</ButtonBg>
            </Link>
          </>
        )}
      </Container>
    </div>
  );
}

const ArrowHolder = styled.div`
    border: solid 1px #179E9F;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    position: absolute;
    &:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
`
const CarreBleu = styled.div`
  padding: 3rem;
  border-radius: 10px;
  background-color: #179e9f;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: auto;
  `;

const LabelUpload = styled.label`
  margin: auto;
  padding: 5px;
  width: 60%;
  color: white;
  background-color: #fff;
  color: #179e9f;
  border: 1px solid #179e9f;
  border-radius: 10px;
  display: block;
  text-align: center;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  `;

const UploadInput = styled.input`
  margin-top: 0;
  width: 0rem;
  font-size: 0.8em;
  font-family: "Roboto", sans-serif;
  outline-style: none;
  `;
  
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 300px;
  margin: 0 auto;
  @media screen and (min-width: 880px) {
    width: 36%;
  }
`;

const Form = styled.form`
  padding: auto;
`;

const InputSubmit = styled.input`
  margin-top: 0px;
  margin-bottom: 5px;
  width: 10rem;
  color: white;
  border: 0;
  background-color: #179e9f;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-size: 1.3em;
  padding: 0rem;
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
  font-size: 1.3em;
  &:hover {
    background-color: #179e9f;
    border: 1px solid #fff;
    color: #ffffff;
  }
`;

export default ChooseImg;
