import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./FileUpload.css";
import { upload, uploadResumeAndDescription } from "../../services/API";

export default function FileUpload({ setFile }) {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  
  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (file != null) {
      const data = new FormData();
      data.append('file_from_react', file);
  
      let response = await fetch('/url_route',
        {
          method: 'post',
          body: data,
        }
      );
      let res = await response.json();
      if (res.status !== 1){
        alert('Error uploading file');
      }
    }
  };
  // useEffect(() => {
  //   uploadFile();
  // }, this);



  

  const changeHandler = async (event) => {
    console.log(JSON.stringify(event.target.files[0]));
    setSelectedFile(event.target.files[0]);
    setFile(event.target.files[0]);
    setIsSelected(true);
    const file = event.target.files[0];
    if (file != null) {
      const data = new FormData();
      data.append('file_from_react', file);
      console.log("GETTING HERE", data)
  
      const response = await upload(data)
      // let response = await fetch('/upload',
      //   {
      //     method: 'post',
      //     body: data,
      //   }
      // );
      // let res = await response.json();
      // if (res.status !== 1){
      //   alert('Error uploading file');
      
    }
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
