import React from 'react'
import {BsWhatsapp} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import{ImDownload} from 'react-icons/im'
import {CgProfile} from 'react-icons/cg'
import {TfiLinkedin} from 'react-icons/tfi'

import './Home.css'

function Home() {
  return (
  <div id='Homes'>
    <div id='mobileimage'>
        <div id='mobileimage1'>
        <span id='image-span'></span>
        </div>
    </div>
      <div id='Home'>
        <div id='intro-div'>
            <h1> HELLO!! I'm Anthony...</h1>
            <p id='intro-p'> i am a full-stack web-developer,i work with react.js for nice user interface and node.js for API's</p>
            {/*button div  */}
            <div id='btn-div'>
                <button id='hire-button'> <a href='https://wa.me/+2348088589379' id='hire-button-a'> Hire ME <CgProfile size={30} id='download-icon'/> </a> </button>
                <button id='download-btn'>Download Resume <ImDownload size={30} id='download-icon'/> </button> 
            </div>
            {/*  */}
            <div>
                <ul id='socials'>
                    <li id='socials-li'> <a href='https://wa.me/+2348088589379' id='a'>  <BsWhatsapp size={30} id='aa'/></a>  </li>
                    <li id='socials-li'> <a href='https://twitter.com/TonyAguanunu' id='a'> <BsTwitter size={30} id='aa'/></a>   </li>
                    <li id='socials-li'> <a href='https://www.linkedin.com/in/anthony-solomon-b46681184/' id='a'> <TfiLinkedin size={30} id='aa'/></a>  </li>
                    <li id='socials-li'> <a href='https://github.com/Tony-CodeS' id='a'> <BsGithub size={30} id='aa'/> </a> </li>
                    <li id='socials-li'> <a href='mailto:asolomon484@gmail.com' id='a'> <SiGmail size={30} id='aa'/></a> </li>
                </ul>
            </div>
        </div>
        {/* image */}
        <div id='image-div'>
        <div id='image-div2'>
        <span id='image-span'></span>
        </div>
        {/* <span id='image-span'> gggggggggggggggggggggggggggggggggggggggggg</span> */}
        </div>
        {/* <span id='image-span'> gggggggggggggggggggggggggggggggggggggggggg</span> */}
    </div>
  </div>
  )
}

export default Home