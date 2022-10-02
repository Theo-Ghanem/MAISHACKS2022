import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import FileUpload from "./FileUpload";
import API from "../../services/API.js";

export default function Upload({ nextPage }) {
  const [file, setFile] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmission = async () => {
    setLoading(true);
    try {
      const result = await API.uploadResumeAndDescription(file, jobDescription);
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
      <TextField
        onChange={(e) => setJobDescription(e.target.value)}
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
      <FileUpload setFile={setFile} />
      <Button onClick={handleSubmission}>Submit</Button>
    </div>
  );
}
