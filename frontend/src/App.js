import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Upload from "./pages/upload";
import Customize from "./pages/customize";

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
  );
}

export default App;
