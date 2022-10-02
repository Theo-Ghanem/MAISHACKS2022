import React, { useEffect } from "react";
import ColorButton from "../../components/CustomButton";
import { fillInResume, getCorrelation } from "../../services/API";
import Section from "./Section";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function Correlation({ wordList, resume, goBack }) {
  const [paragraphs, setParagraphs] = React.useState([]);
  const [correlations, setCorrelations] = React.useState([]);
  const [matches, setMatches] = React.useState([]);
  const submit = async () => {
    const myList = matches.map((m) => m.paragraph);
    const unique = [...new Set(myList)];
    const toSend = unique.map((par) => {
      const words = matches
        .filter((m) => m.paragraph == par)
        .map((m) => m.word);
      return {
        paragraph: par,
        words: words,
      };
    });
    const resp = await fillInResume(toSend);
    const newMatches = matches.map((m) => {
      const ind = toSend.findIndex((t) => t.paragraph == m.paragraph);
      if (ind >= 0) {
        return {
          ...m,
          paragraph: toSend[ind].paragraph,
        };
      }
      return m;
    });
    setMatches(newMatches);
    console.log(resp);
  };
  const callApi = async () => {
    const paragraphs = resume
      .map((sec) => sec.content.map((position) => position.description))
      .flat();
    console.log("about to get res");
    const res = await getCorrelation(wordList, paragraphs);
    setCorrelations(res);
    const res2 = res
      .map((descMatches, i) => {
        return descMatches.map((match, p) => {
          return {
            value: match,
            paragraph: paragraphs[p],
            word: wordList[i],
          };
        });
      })
      .flat()
      .flat()
      .sort((a, b) => b.value - a.value);

    const output = [];
    wordList.forEach((word) => {
      let count = 0;
      res2.forEach((match) => {
        if (match.word === word && count < 2) {
          output.push(match);
          count++;
        }
      });
    });
    console.log("ACtual res", output);
    setMatches(output);
  };
  useEffect(() => {
    callApi();
  }, [wordList, resume]);
  const updateWordList = (newWords, text) => {
    setMatches((matches) => [
      ...matches.filter((match) => match.paragraph !== text),
      ...newWords.map((word) => ({ word, paragraph: text })),
    ]);
  };
  return (
    <div>
      {resume.map((section) => (
        <Section
          words={wordList}
          header={section.header}
          content={section.content}
          matches={matches}
          updateWordList={updateWordList}
        />
      ))}
      <ColorButton startIcon={<ArrowBack />} onClick={goBack}>
        Go Back
      </ColorButton>
      <ColorButton endIcon={<ArrowForward />} onClick={submit}>
        Submit
      </ColorButton>
    </div>
  );
}
