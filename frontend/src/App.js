import logo from "./logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import Upload from "./pages/upload";
import KeywordSelection from "./pages/keywordSelection";
import seasonings from "./seasonings.png";
import Correlation from "./pages/correlation";
import Final from "./pages/final";
import { useLocation } from "react-router-dom";
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
        description: "Graduated with a 3 GPA",
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

function App() {
  const location = useLocation();

  const [pageCounter, setPageCounter] = useState(0);
  const [resume, setResume] = useState(sampleResume);
  const submitResumeUpdates = (updates) => {
    setResume(
      resume.map((category) => ({
        header: category.header,
        content: category.content.map((position) => {
          let description = position.description;
          const newD = updates.find((u) => u.old == description);
          if (newD) {
            description = newD.description;
          }
          return {
            ...position,
            description,
          };
        }),
      }))
    );
  };
  const [description, setDescription] = useState(null);
  const [selectedWords, setSelectedWords] = useState([]);
  const [wordList, setWordList] = useState([]);
  useEffect(() => {
    if (location.search.length > 0) {
      const thing = JSON.parse(decodeURIComponent(location.search.slice(3)));
      console.log(thing);
      setResume(thing);
    }
  }, [location]);
  const nextPage = (keywords) => {
    setPageCounter(pageCounter + 1);
    setWordList(keywords);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "60%" }}>
        {pageCounter === 0 ? (
          <div>
            <div className="title">
              <img className="logo" src={logo}></img>
              Let's Season Your CV!
            </div>
            <div className="subtitle">
              Get started by uploading your CV <br></br> and your job
              description on the right
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex" }}>
              <img className="logo2" src={logo}></img>
              <div className="title2">Season My CV</div>
            </div>
            <div className="subtitle2">
              Pick and choose the keywords<br></br>you would like to include
            </div>
          </div>
        )}
        <img
          style={{ position: "absolute", bottom: 0, left: 0, zIndex: 0 }}
          className="seasonings"
          src={seasonings}
        ></img>
      </div>

      <div className="App" style={{ width: "40%" }}>
        {pageCounter === 0 && <Upload nextPage={nextPage} />}
        {pageCounter === 1 && (
          <KeywordSelection
            wordList={wordList}
            goBack={() => setPageCounter(0)}
            submitList={(list) => {
              setSelectedWords(list);
              setPageCounter(2);
            }}
          />
        )}
        {pageCounter === 2 && (
          <Correlation
            wordList={selectedWords}
            resume={resume}
            submitResumeUpdates={submitResumeUpdates}
            goBack={() => setPageCounter(1)}
          />
        )}
        {pageCounter === 3 && <Final goBack={() => setPageCounter(2)} />}
      </div>
    </div>
  );
}

export default App;
