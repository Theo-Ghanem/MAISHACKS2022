import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function Compare({ goBack, submitList }) {
  const [loading, setLoading] = useState(false);
  const [pageCounter, setPageCounter] = useState(2);
  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
