import React, { useState } from "react";
import Button from "@mui/material/Button";
import ColorButton from "../../components/CustomButton";

export default function Final({ goBack }) {
  const [loading, setLoading] = useState(false);
  const [pageCounter, setPageCounter] = useState(2);
  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <ColorButton onClick={handleSubmit}>Submit</ColorButton>
    </div>
  );
}
