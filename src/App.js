import React from "react"
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/music/music";
import Portfolio from "./components/Portfolio/portfolio";
import Footer from "./components/Footer/Footer";
import './App.css'


const App =()=>{
  return(
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Music/>
     <Portfolio/>
     <Footer/>
    </div>
  );
}

export default App;