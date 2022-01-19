import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "docx"];

const DragAndDrop = () => {
    const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  console.log(file)
    return (
        <div className="App">
          <h1>Déposez votre photo ici</h1>
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
          <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
        </div>
      );
}

export default DragAndDrop;