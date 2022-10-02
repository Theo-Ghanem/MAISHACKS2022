import logo from "./logo.png";
import "./App.css";
import { useState } from "react";
import Upload from "./pages/upload";
import Customize from "./pages/customize";
import seasonings from "./seasonings.png"

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

function App() {
  const [pageCounter, setPageCounter] = useState(0);
  const [resume, setResume] = useState(null);
  const [description, setDescription] = useState(null);

  const nextPage = (res) => {
    setPageCounter(pageCounter + 1);
    setResume(res.resume);
    setDescription(res.description);
  };

  return (
    <div style={{display: "flex" }}>
        <div>
          <div className="title">
            <img className="logo" src={logo}></img>
            Let's Season Your CV!
          </div>
          <div className="subtitle">Get started by uploading your CV <br></br> and your job description on the right</div>
        <img className="seasonings" src={seasonings}></img>
      </div>
      
      <div className="App">
        {pageCounter === 0 && <Upload nextPage={nextPage} />}
        {pageCounter === 1 && (
          <Customize
            resume={resume}
            description={description}
            goBack={() => setPageCounter(0)}
          />
        )}
      </div>
    </div>

    
  );
}

export default App;
