import React, { useEffect } from "react";
import ColorButton from "../../components/CustomButton";
import { getCorrelation } from "../../services/API";
import Section from "./Section";

export default function Correlation({ wordList, resume, goBack }) {
  const [paragraphs, setParagraphs] = React.useState([]);
  const [correlations, setCorrelations] = React.useState([]);
  const [matches, setMatches] = React.useState([]);
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
      <ColorButton onClick={goBack}>Go Back</ColorButton>
      <ColorButton onClick={goBack}>Submit</ColorButton>
    </div>
  );
}
