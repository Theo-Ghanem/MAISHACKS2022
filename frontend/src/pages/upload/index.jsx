import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import FileUpload from "./FileUpload";
import axios from "axios";
import API from "../../services/API.js";
import SendIcon from '@mui/icons-material/Send';

export default function Upload({ nextPage }) {
  const [file, setFile] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [loading, setLoading] = useState(false);

  const sendForm = async () => {
    var formData = new FormData();
    formData.append("File", file);
    const { data } = await axios.post(
      "https://localhost:5000/upload/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  };

  const handleSubmission = async () => {
    setLoading(true);
    try {
      let formData = new FormData();
      formData.append("File", file);
      const formDataObj = JSON.stringify(Object.fromEntries(formData));
      console.log("form data", formDataObj);
      //   const result = await API.uploadResumeAndDescription(
      //     formDataObj,
      //     jobDescription
      //   );
      //const result = await sendForm();
      const result = true;
      console.log("RESULT", JSON.stringify(result));
      nextPage(result);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ paddingTop: "10px" }}>
      <div style={{ backgroundColor: "#B3442B", marginTop: "30px", marginRight: "0%", width: "90%", alignItems: "center"}}>
      <TextField fullWidth
        InputProps={{ style: {fontFamily: "Rounded Mplus", paddingTop: "8%", textAlign: "center", fontSize: "20"} }}
        onChange={(e) => setJobDescription(e.target.value)}
        id="outlined-multiline-static"
        label=""
        background-color = "#282c34"
        multiline
        rows={10}
        defaultValue="Replace this text with your dream job description :)"
      />
      </div>
      <FileUpload setFile={setFile} />
      <Button variant="contained" InputProps={{ style: {color: "#A1B251"} }} endIcon={<SendIcon />} onClick={handleSubmission}>Spice It Up!</Button>
    </div>
  );
}
