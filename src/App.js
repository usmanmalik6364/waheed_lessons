
import './App.css';
import React from 'react';
import { FormControl } from './formcontrol';
import { Routes, Route, Link } from "react-router-dom";
import { Rim } from './Rim';
import { Aur } from './Aur';
import {useHistory} from 'react-router-dom';

const App = () =>{
  const [firstName,setFirstName] = React.useState("Waheed");
  const [lastName,setLastName] = React.useState("");
  React.useEffect(()=>{
    if(firstName.length>0){
      setTimeout(()=>{setLastName("Abbas")},5000);
    }
  },[]);
  React.useEffect(() => {
    if (lastName && lastName.length > 0) {
      console.log("IN PARENT \t", lastName);
    }
  }, [lastName])
  return(
    
  <React.Fragment>
      <Routes>
        <Route path="/" element={<FormControl firstName={firstName} lastName={lastName} setLastName={setLastName}/>} />
        <Route path="rim" element={<Rim />} />
        <Route path="aur" element={<Aur />} />
      </Routes>
  </React.Fragment>);
};

export default App;
