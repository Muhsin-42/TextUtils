import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './component/About';


function App() {

  const toggleMode = ()=>{
    if(mode == 'light'){
      document.body.style.backgroundColor = '#333'
      setMode('dark')
      showAlert('dark mode has been enabled','success')
      document.title = 'TextUtils-Dark Mode'
    } 
    else{ 
      document.body.style.backgroundColor = 'grey'
      setMode('light')
      showAlert('Light mode has been enabled','success')
      document.title = 'TextUtils-Light Mode'
    }
  }

  const showAlert= (msgg,typee)=>{
      setAlert({
        msg:msgg,
        type:typee
      })
      setTimeout(()=>{
        setAlert(null)
      },2000)
  }

  const [mode,setMode] = useState('dark');
  const [alert,setAlert] = useState(null);

  return (
    <div className={`App`} >
            <BrowserRouter>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>

      <Routes>
        <Route exact path="/about"  element={<About mode={mode} />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter The Text To Analyze' mode={mode} />}  />
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;