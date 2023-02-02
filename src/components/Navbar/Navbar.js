import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {FaBookmark} from "react-icons/fa"
import {IoMdBriefcase} from "react-icons/io"
import './Navbar.css'

function Navbar() {
  return (
    <div id='fixed'>
        <ul id='navbar'>
            <li>
            <a href='#Homes' id='nav'>
            <AiFillHome  id='icon'/>
                Home
            </a>
            </li>
            <li >
               <a href='#About' id='nav'>  <FaBookmark  id='icon'/>
                About</a>
            </li>
            <li>
                <a href='#Portfolio' id='nav'>
                <IoMdBriefcase  id='icon'/>
                Profile
                </a>
              
            </li>
        </ul>
    </div>
  )
}

export default Navbar