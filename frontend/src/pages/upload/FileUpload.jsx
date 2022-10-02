import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

export default function FileUpload({ setFile }) {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    console.log(JSON.stringify(event.target.files[0]));
    setSelectedFile(event.target.files[0]);
    setFile(event.target.files[0]);
    setIsSelected(true);
  };
  useEffect(() => {
    console.log("File UPLOADED", selectedFile);
  }, [selectedFile]);

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
    </div>
  );
}
