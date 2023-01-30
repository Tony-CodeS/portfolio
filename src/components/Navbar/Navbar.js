import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {FaBookmark} from "react-icons/fa"
import {IoMdBriefcase} from "react-icons/io"
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <ul id='navbar'>
            <li>
                <AiFillHome  id='icon'/>
                Home
            </li>
            <li>
                <FaBookmark  id='icon'/>
                About
            </li>
            <li>
                <IoMdBriefcase  id='icon'/>
                Profile
            </li>
        </ul>
    </div>
  )
}

export default Navbar