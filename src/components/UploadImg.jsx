import { useForm } from "react-hook-form";
import axios from "axios";

function UploadImg() {
  const { register, handleSubmit } = useForm();

  const imgData = new FormData();

  const postImg = (data) => {
    const image = data.image[0];
    imgData.append("image", image);

    axios
      .post("http://localhost:5000/upload", imgData)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(postImg)}>
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
  );
}

export default UploadImg;
