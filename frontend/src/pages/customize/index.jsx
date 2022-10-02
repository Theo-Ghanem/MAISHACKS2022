import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Keywords.css";

export default function Customize({ goBack, wordList, submitList }) {
  const print = () => {
    console.log(JSON.stringify(wordList));
  };
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={print}>Print</button>
      <FormGroup>
        {/* need to be able to iterate through the keywords of the job description */}
        <FormControlLabel control={<Checkbox />} label="banana" />
        <FormControlLabel control={<Checkbox />} label="potato" />
        <FormControlLabel control={<Checkbox />} label="burger" />
        <FormControlLabel control={<Checkbox />} label="pineapple" />
      </FormGroup>
    </div>
  );
}
