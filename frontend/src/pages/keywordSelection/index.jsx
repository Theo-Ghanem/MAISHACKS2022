import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import "./Keywords.css";
import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";
import Typography from "@mui/material/Typography";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/material/styles";

export default function KeywordSelection({ goBack, wordList, submitList }) {
  const [newList, setNewList] = useState(wordList);
  const handleSubmit = () => {
    console.log(newList);
    submitList(newList);
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
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#000000",
    backgroundColor: "#A1B251",
    marginRight: "8%",
    fontFamily: "Rounded Mplus",
    "&:hover": {
      backgroundColor: "#A1B251",
    },
  }));
  // const useStyles = makeStyles(() => ({
  //   formControlLabel: { fontSize: "30px", "& label": { fontSize: "0.6rem" } }
  // }));

  return (
    <div>
      <div className="subtitle">
        Here are the suggested keywords from your job description. Select the
        ones that you would like to include.
      </div>
      <FormGroup>
        {wordList.map((word) => (
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#B3442B",
                  "&.Mui-checked": {
                    color: "#B3442B",
                  },
                }}
                checked={newList.includes(word)}
                onChange={() => toggleWord(word)}
              />
            }
            label={
              <Typography sx={{ fontFamily: "Rounded Mplus" }}>
                {word}
              </Typography>
            }
          />
        ))}
      </FormGroup>
      <ColorButton
        variant="contained"
        InputProps={{ style: { marginLeft: "10%" } }}
        startIcon={<ArrowBack />}
        onClick={goBack}
      >
        Go Back!
      </ColorButton>
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
      <ColorButton
        variant="contained"
        InputProps={{ style: { marginLeft: "10%" } }}
        endIcon={<ArrowForward />}
        onClick={handleSubmit}
      >
        Next Page!
      </ColorButton>
    </div>
  );
}
