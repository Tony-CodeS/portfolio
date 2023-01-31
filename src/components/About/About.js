import React from 'react'
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import './About.css'


function About() {

  useEffect(() => {
   Aos.init({duration:1000})
  }, []);

  return (

 
    <div id='#About'>
         <div>
      <div id='aboutdiv' data-aos="fade-up">
        <h2 id='about-heading'> About Me</h2>
        <p id='about-writeup'> 
        My name is Anthony Aguanunu.
        I am a Science Laboratory Technology (Physics) graduate from the Institute of Management and Technology Enugu.
        I have been training as a full stack web-developer for the past years and cooperated with several Projects. 
        My big career goal is to be a software Icon by placing Africa in the Global Stage through breakthrough innovations.
        I know that I can provide a fresh take and an extraordinary approach to every project. 
        I am always open to challenges and constructive feedback.
        I am open-minded and learn new things quickly. I want to become 
        a team player and dedicate all my skills and talents to develop high-quality and unique products.
        </p>
    </div>
  </div>

    <div id='skill-div'>
        <h3 id='about-heading' data-aos="flip-right"> STACKS</h3>
        <div id='stacks-div'>
        <h2 id='stacks'> HTML</h2>
        <ProgressBar animated now={95} id='progress' label={`95%`} variant='success'/>
        </div>

        <div id='stacks-div' data-aos="fade-up">
        <h3 id='stacks'> CSS</h3>
        <ProgressBar animated now={75} id='progress' label={`75%`} variant='success'/>
        </div>

        <div id='stacks-div' data-aos="fade-up">
        <h3 id='stacks'> BOOTSTRAP</h3>
        <ProgressBar animated now={85} id='progress' label={`85%`} variant='success'/>
        </div>

        <div id='stacks-div' data-aos="fade-up">
        <h3 id='stacks'> JAVASCRIPT</h3>
        <ProgressBar animated now={55} id='progress' label={`55%`} variant='success'/>
        </div>

        <div id='stacks-div' data-aos="fade-up">
        <h3 id='stacks'> REACT.JS</h3>
        <ProgressBar animated now={75} id='progress' label={`75%`} variant='success'/>
        </div>

        <div id='stacks-div'>
        <h3 id='stacks' > NODE.JS</h3>
        <ProgressBar animated now={75} id='progress' label={`75%`} variant='success'/>
        </div>

        
        <div id='stacks-div'>
        <h3 id='stacks'> EXPRESS.JS</h3>
        <ProgressBar animated now={75} id='progress' label={`75%`} variant='success'/>
        </div>

        
        <div id='stacks-div'>
        <h3 id='stacks'> MONGO-DB</h3>
        <ProgressBar animated now={70} id='progress' label={`70%`} variant='success'/>
        </div>

        
        <div id='stacks-div'>
        <h3 id='stacks'> VERSION CONTROL</h3>
        <ProgressBar animated now={65} id='progress' label={`65%`} variant='success'/>
        </div>
    </div>
    </div>
  )
}

export default About