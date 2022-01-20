import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import UploadImg from "../datas/uploadImg";
import ColorThief from "./ColorThief";

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
      <form onSubmit={handleSubmit(postImg)} encType="multipart/form-data">
        <div>
          <label htmlFor="image">
            Image :<br />
            <input
              type="file"
              name="image"
              {...register("image")}
            />
          </label>
          <br />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {image && <ColorThief imageUrl={"/assets/"+image.name} />}
    </div>
  );
}

export default ChooseImg;
