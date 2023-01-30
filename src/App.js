import React from "react"
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/music/music";
import './App.css'


const App =()=>{
  return(
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Music/>
    </div>
  );
}

export default App;