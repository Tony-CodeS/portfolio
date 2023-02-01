import React from 'react'
import {BsWhatsapp} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {TfiLinkedin} from 'react-icons/tfi'
import {MdCopyright} from 'react-icons/md'
import Marquee from "react-fast-marquee";
import "./Footer.css"

function Footer() {
  return (
    <div>
          <div id="footer">
                <ul id='contact'>
                    <li id='socials-lis' > <a href='https://wa.me/+2348088589379' id='as'>  <BsWhatsapp size={30} id='aa'/></a>  </li>
                    <li id='socials-lis' > <a href='https://twitter.com/TonyAguanunu' id='as'> <BsTwitter size={30} id='aa'/></a>   </li>
                    <li id='socials-lis' > <a href='https://www.linkedin.com/in/anthony-solomon-b46681184/' id='as'> <TfiLinkedin size={30} id='aa'/></a>  </li>
                </ul>
            </div>
            <Marquee gradient={false} speed={70}>
            <MdCopyright id='copyright'/>
            <i> ANTHONY AGUANUNU</i>
            </Marquee>
            
    </div>
  )
}

export default Footer