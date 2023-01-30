import React from "react"
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import './App.css'


const App =()=>{
  return(
    <div>
     <Navbar/>
     <Home/>
    </div>
  );
}

export default App;