import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [txt, setTxt] = useState("Toggle Dark Mode");
  const [txtMode, setTxtMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTxt("Toggle Light Mode");
      setTxtMode('light');
      document.body.style.backgroundColor = 'rgb(28 28 28)';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      setTxt("Toggle Dark Mode");
      setTxtMode('dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title={"Text Refactor"} Mode={mode} btnTxt={txt} toggleMode={toggleMode} txtMode={txtMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About Mode={mode}/>} />
            <Route exact path="/" element={<TextForm title={"Enter the text here: "} Mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
