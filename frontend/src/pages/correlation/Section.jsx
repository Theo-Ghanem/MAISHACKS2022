import { Chip, MenuItem, OutlinedInput, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Section({
  header,
  content,
  words,
  matches,
  updateWordList,
}) {
  const handleChange = (event, text) => {
    const {
      target: { value },
    } = event;
    const newWords = typeof value === "string" ? value.split(",") : value;
    console.log(newWords, text);
    updateWordList(newWords, text);
  };
  return (
    <div>
      <h1>{header}</h1>
      {content.map((position) => (
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "150px",
              maxWidth: "150px",
              minWidth: "150px",
              paddingTop: "40px",
            }}
          >
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={matches
                .filter((m) => m.paragraph == position.description)
                .map((m) => m.word)}
              onChange={(e) => handleChange(e, position.description)}
              input={<OutlinedInput label="Keywords" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {words.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ flexGrow: 1 }}>
            <h3>{position.title}</h3>
            <p>{position.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
