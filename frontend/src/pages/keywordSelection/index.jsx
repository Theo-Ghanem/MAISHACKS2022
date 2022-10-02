import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Keywords.css";
import Button from '@mui/material/Button';
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/styles";

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
  // const useStyles = makeStyles(() => ({
  //   formControlLabel: { fontSize: "30px", "& label": { fontSize: "0.6rem" } }
  // }));

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={print}>Print</button>
      <FormGroup>
        {/* iterate through the keywords of the job description */}
        {wordList.map((word) => (
          <FormControlLabel
          // style={styles.formControlLabel}
            control={
              <Checkbox
                checked={newList.includes(word)}
                onChange={() => toggleWord(word)}
              />
            }
            label={word
          // <Typography className={styles.formControlLabel}>word</Typography>
        }
          />
        ))}
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
