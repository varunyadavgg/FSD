import React,{useState,useEffect} from 'react'
import './App.css';
import Axios from "axios";

function App() {

  const[sname,setStudentName]=useState("")
  const[tech,setTech]=useState("")
  const[section,setSection]=useState("")

  const submitReview = ()=>{
    Axios.post('https://localhost:9000/demo')
  }



  return (
    <div class = "App">
      <h1>React app Application Demo</h1>
    <div class ="Form">
    <label>
        <b> Student name </b>
      </label>
      <input type = "text" name="hello1" required></input>
      
      
      <label>
        <b> Roll no  </b>
      </label>
      <input type = "text" name="hello2"></input>
      
      
      <label>
        <b>  Class</b>
      </label>
      <input type = "text" name="hello3"></input>
    <div class ="Button">
      <button > Press me</button>
    </div>
    
    </div>
    
    
    </div>
    
    
  );
}

export default App;
