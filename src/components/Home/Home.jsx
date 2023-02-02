import React from 'react'
import { useEffect } from 'react';
import {motion, spring} from 'framer-motion'
import Aos from 'aos';
import "aos/dist/aos.css"
import {BsWhatsapp} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import{ImDownload} from 'react-icons/im'
import {CgProfile} from 'react-icons/cg'
import {TfiLinkedin} from 'react-icons/tfi'

import './Home.css'

function Home() {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('myResume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'myResume.pdf';
                alink.click();
            })
        })
    }
  
  useEffect(() => {
    Aos.init({duration:1000})
   }, []);
  return (
  <div id='Homes'>
    <div id='mobileimage'>
        <div id='mobileimage1'>
        <span id='image-span'></span>
        </div>
    </div>
      <div id='Home'>
        <div id='intro-div' data-aos="zoom-in">
            <h1> HELLO!! I'm Anthony...</h1>
            <p id='intro-p'> I am a full-stack web-developer, i work with react.js for nice user interface and node.js for API's</p>
            {/*button div  */}
            <div id='btn-div'>
                <motion.button
                 whileHover={{
                    scale:0.9,
                    originX:0,

                }}

                transition={{
                    type:spring,
                    stiffness:300
                }}
                 id='hire-button' data-aos="zoom-in"> <a href='https://wa.me/+2348088589379' id='hire-button-a'> Hire ME <CgProfile size={30} id='download-icon'/> </a> </motion.button>
                <motion.button 
                whileHover={{
                    scale:1.1,
                    originX:0,

                }}

                transition={{
                    type:spring,
                    stiffness:300
                }}
                id='download-btn' onClick={onButtonClick}>Download Resume 
                <ImDownload size={30} id='download-icon'/> </motion.button> 
            </div>
            {/*  */}
            <div>
                <ul id='socials'>
                    <li id='socials-li' data-aos="fade-in"> <a href='https://wa.me/+2348088589379' id='a'>  <BsWhatsapp size={30} id='aa'/></a>  </li>
                    <li id='socials-li' data-aos="fade-in"> <a href='https://twitter.com/TonyAguanunu' id='a'> <BsTwitter size={30} id='aa'/></a>   </li>
                    <li id='socials-li' data-aos="fade-in"> <a href='https://www.linkedin.com/in/anthony-solomon-b46681184/' id='a'> <TfiLinkedin size={30} id='aa'/></a>  </li>
                    <li id='socials-li' data-aos="fade-in"> <a href='https://github.com/Tony-CodeS' id='a'> <BsGithub size={30} id='aa'/> </a> </li>
                    <li id='socials-li' data-aos="fade-in"> <a href='mailto:asolomon484@gmail.com' id='a'> <SiGmail size={30} id='aa'/></a> </li>
                </ul>
            </div>
        </div>
        {/* image */}
        <div id='image-div' data-aos="flip-right">
        <div id='image-div2' data-aos="flip-right">
        <span id='image-span' data-aos="flip-right"></span>
        </div>
        {/* <span id='image-span'> gggggggggggggggggggggggggggggggggggggggggg</span> */}
        </div>
        {/* <span id='image-span'> gggggggggggggggggggggggggggggggggggggggggg</span> */}
    </div>
  </div>
  )
}

export default Home