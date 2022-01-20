import { useForm } from "react-hook-form";
import { useState } from "react";
import UploadImg from "../datas/uploadImg";
import ColorThief from "./ColorThief";

function ChooseImg() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState();

  const imgData = new FormData();

  const postImg = (data) => {
    const image = data.image[0];
    imgData.append("image", image);

    UploadImg(imgData, setImage);
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
              {...register("image", { required: true })}
            />
          </label>
          <br />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {image && <ColorThief imageUrl={image} />}
    </div>
  );
}

export default ChooseImg;
