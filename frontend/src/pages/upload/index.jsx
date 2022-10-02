import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import FileUpload from "./FileUpload";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ColorButton from "../../components/CustomButton";

export default function Upload({ nextPage }) {
  const [file, setFile] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [loading, setLoading] = useState(false);

  const sendForm = async () => {
    var formData = new FormData();
    formData.append("File", file);
    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.json().then((body) => {
        console.log(body);
      });
    });

    return formData;
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
      const result = await sendForm();
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
      <div
        style={{
          backgroundColor: "#B3442B",
          marginTop: "30px",
          marginRight: "0%",
          width: "90%",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          InputProps={{
            style: {
              fontFamily: "Rounded Mplus",
              paddingTop: "8%",
              textAlign: "center",
              fontSize: "20",
            },
          }}
          onChange={(e) => setJobDescription(e.target.value)}
          id="outlined-multiline-static"
          label=""
          background-color="#282c34"
          multiline
          rows={10}
          defaultValue="Replace this text with your dream job description :)"
        />
      </div>
      <FileUpload setFile={setFile} />
      <br></br>
      <br></br>
      <ColorButton
        variant="contained"
        InputProps={{ style: { marginLeft: "10%" } }}
        endIcon={<SendIcon />}
        onClick={handleSubmission}
      >
        Spice It Up!
      </ColorButton>
    </div>
  );
}
