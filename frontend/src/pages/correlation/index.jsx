import React, { useEffect } from "react";
import ColorButton from "../../components/CustomButton";
import { getCorrelation } from "../../services/API";
import Section from "./Section";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function Correlation({ wordList, resume, goBack }) {
  const callApi = async () => {
    const paragraphs = resume
      .map((sec) => sec.content.map((position) => position.description))
      .flat();
    const res = await getCorrelation(wordList, paragraphs);
    console.log(res);
  };
  useEffect(() => {
    callApi();
  }, [wordList, resume]);
  return (
    <div>
      {wordList.map((word) => (
        <div>{word}</div>
      ))}
      {resume.map((section) => (
        <Section header={section.header} content={section.content} />
      ))}
      <ColorButton startIcon={<ArrowBack />} onClick={goBack}>Go Back</ColorButton>
      <ColorButton endIcon={<ArrowForward />} onClick={goBack}>Submit</ColorButton>
    </div>
  );
}
