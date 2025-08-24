//main file
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
//react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massege, type) => {
    setAlert({
      msg: massege,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);

    //toggle button mate
    // if (mode === 'light') {
    //   setMode('dark');
    //   document.body.style.backgroundColor = 'grey';
    //   showAlert("Dark Mode has been enabled", "success")
    // } else {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //   showAlert("Ligth Mode has been enabled", "success")
    // }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter" mode={mode} showAlert={showAlert} />}></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>

    // <>
    //   <Navbar title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert} />
    //   <div className="container">
    //     <TextForm heading="Enter the masseges" mode={mode} showAlert={showAlert} />
    //     <About />
    //   </div>
    // </> 
  );
}

export default App;