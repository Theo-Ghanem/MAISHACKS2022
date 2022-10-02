import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Keywords.css";

export default function Customize({ goBack, wordList, submitList }) {
  const [newList, setNewList] = useState(wordList);
  const handleSubmit = () => {
    console.log(newList);
  };
  const print = () => {
    console.log(JSON.stringify(wordList));
  };
  const addWord = (word) => {
    setNewList([...newList, word]);
  };
  const removeWord = (word) => {
    setNewList((l) => l.filter((w) => w !== word));
  };
  const toggleWord = (word) => {
    if (newList.includes(word)) {
      removeWord(word);
    } else {
      addWord(word);
    }
  };
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={print}>Print</button>
      <FormGroup>
        {/* iterate through the keywords of the job description */}
        {wordList.map((word) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={newList.includes(word)}
                onChange={() => toggleWord(word)}
              />
            }
            label={word}
          />
        ))}
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
