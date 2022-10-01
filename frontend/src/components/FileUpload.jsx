import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [jobDescription, setJobDescription] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    console.log(selectedFile);
  };

  return (
    <div>
      <TextField
        onChange={(e) => setJobDescription(e.target.value)}
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />

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
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}
