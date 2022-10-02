import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./FileUpload.css";

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
    <div style={{paddingRight: "10%"}}>
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
        </div>
      ) : (
        <p>Upload your resume below!</p>
        
      )}
      <input type="file" class = "inputfile" id="file" name="file" onChange={changeHandler} />
      <label for="file">Choose a file</label>
      
    </div>
  );
}
