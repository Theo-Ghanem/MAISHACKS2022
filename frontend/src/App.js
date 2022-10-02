import logo from "./logo.png";
import "./App.css";
import { useState } from "react";
import Upload from "./pages/upload";
import KeywordSelection from "./pages/keywordSelection";
import seasonings from "./seasonings.png";
import Correlation from "./pages/correlation";
import Final from "./pages/final";

const sampleResume = [
  {
    header: "Education",
    content: [
      {
        title: "Bachelors of Science in Computer Science",
        description: "Graduated with a 3.8 GPA",
      },
      {
        title: "High School Diploma",
        description: "Graduated with a 3.8 GPA",
      },
    ],
  },
  {
    header: "Work Experience",
    content: [
      {
        title: "Software Engineer",
        description: "Worked on a team of 5 to build a web app",
      },
      {
        title: "Software Engineer Intern",
        description: "Developed a feature for a web app",
      },
    ],
  },
];

const sampleWordList = [
  "Software Engineer",
  "Web Developer",
  "Frontend Engineer",
  "React",
  "Team Work",
  "Agile",
];

function App() {
  const [pageCounter, setPageCounter] = useState(0);
  const [resume, setResume] = useState(sampleResume);
  const [description, setDescription] = useState(null);

  const nextPage = (res) => {
    setPageCounter(pageCounter + 1);
    setResume(res.resume);
    setDescription(res.description);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "60%" }}>
        <div className="title">
          <img className="logo" src={logo}></img>
          Let's Season Your CV!
        </div>
        {pageCounter === 0 ? (
          <div className="subtitle">
            Get started by uploading your CV <br></br> and your job description
            on the right
          </div>
        ) : (
          <div className="subtitle">
            Pick and choose the keywords<br></br>you would like to include
          </div>
        )}
        <img className="seasonings" src={seasonings}></img>
      </div>

      <div className="App" style={{ width: "40%" }}>
        {pageCounter === 0 && <Upload nextPage={nextPage} />}
        {pageCounter === 1 && (
          <KeywordSelection
            wordList={sampleWordList}
            goBack={() => setPageCounter(0)}
            submitList={() => {
              setPageCounter(2);
            }}
          />
        )}
        {pageCounter === 2 && (
          <Correlation
            wordList={sampleWordList}
            resume={sampleResume}
            goBack={() => setPageCounter(1)}
          />
        )}
        {pageCounter === 3 && <Final goBack={() => setPageCounter(2)} />}
      </div>
    </div>
  );
}

export default App;
