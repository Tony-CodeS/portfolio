import React from 'react'
import "./portfolio.css"
import {motion, spring} from 'framer-motion'
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useState } from 'react'
import front1 from '../../assets/BLOGR.png'
import front2 from '../../assets/dispatch.png'
import front3 from '../../assets/auth.png'
import front4 from '../../assets/Untitled-1.png'
import front5 from '../../assets/TodoNew.png'
import Apiphoto from '../../assets/apiphoto.png'
import postman from '../../assets/postman.png'
function Portfolio() {
  useEffect(() => {
    Aos.init({duration:1000})
   }, []);
    const frontEndArray =[{    photo:front1, title:'BLOGRS', description:'the inspiration was for this project was gotten from frontend Mentor', url:'https://blogr-dyptk4gwo-tony-codes.vercel.app/'},
    {    photo:front2, title:'Dispatch.ng', description:'A Dispatch Landing page for ordering rides and delivering goods', url:'https://dispatch-riders.vercel.app/'},
    {    photo:front3, title:'Authentication app', description:'An authentication app built with firebase as backend', url:'https://authentication-idxwc13q9-tony-codes.vercel.app/'},
    {    photo:front4, title:'Easy-Bank', description:' A loan app landing page built with HTML and CSS', url:'https://adorable-jalebi-5d1430.netlify.app/'},
    {    photo:front5, title:'TODO', description:' TODO APP built with react.js', url:'https://tonystodo.netlify.app/'},
  ] 

  const BackendArray =[ {    photo:postman, title:'FriendsApp', description:'An API that collects individual user`s details and authenticates users', url:'https://github.com/Tony-CodeS/friendsApp'},
  {    photo:postman, title:'OpenSea', description:'An API that only handles post requests', url:'https://github.com/Tony-CodeS/OpenseaBackend'},
  {    photo:Apiphoto, title:'Dispatch', description:'An API collects users email for Email Newsletter subscription', url:'https://github.com/Tony-CodeS/dispatch.ng'},
  {    photo:postman, title:'Users', description:'An API that collects individual user`s details and authenticates users', url:'https://github.com/Tony-CodeS/Users/tree/main/Users'},
  {    photo:postman, title:'Backend', description:'An all backend codes and github directory', url:'https://github.com/Tony-CodeS'}
]
  
const [frontend, setfrontend] = useState(frontEndArray.map(port =>{
    return(
    
       <div>
            <div id="div" data-aos="zoom-in">
           <div id='img-div'>
      <img src={port.photo} alt="..." id='img'/>
      <div id="card-description">
        <h2 id='port-title'>{port.title}</h2>
        <p>
        {port.description}
        </p>
        <motion.button 
            whileHover={{
              scale:0.9,
              originX:0,

          }}

          transition={{
              type:spring,
              stiffness:300
          }}id='workbtn'><a href={port.url} id='view'> View Demo</a></motion.button>
      </div>
    </div>
    </div>
       </div>
        
    )
}))
const [backend, setBackend] = useState('')


const handleFront =()=>{
 setBackend('')
 setfrontend(
    frontEndArray.map(port =>{
        return(
            <div id="div" data-aos="zoom-in">
            <div id='img-div'>
       <img src={port.photo} alt="..." id='img'/>
       <div id="card-description">
         <h2 id='port-title'>{port.title}</h2>
         <p>
         {port.description}
         </p>
         <motion.button 
             whileHover={{
              scale:0.9,
              originX:0,

          }}

          transition={{
              type:spring,
              stiffness:300
          }}id='workbtn'><a href={port.url} id='view'> View Demo</a></motion.button>
       </div>
     </div>
     </div>
        )
    })
 )
}

const handleBack =()=>{
    setfrontend('')
    setBackend(
        BackendArray.map(port =>{
            return(
                <div id="div" data-aos="zoom-in">
            <div id='img-div'>
       <img src={port.photo} alt="..." id='img'/>
       <div id="card-description">
         <h2 id='port-title'>{port.title}</h2>
         <p>
         {port.description}
         </p>
         <motion.button
             whileHover={{
              scale:0.9,
              originX:0,

          }}

          transition={{
              type:spring,
              stiffness:300
          }}
          id='workbtn'><a href={port.url} id='view'> View Code</a></motion.button>
       </div>
     </div>
     </div>
            )
        })
    )
}
  return (
    <div id='Portfolio'>
        <div>
            <h1 data-aos="flip-right"> Portfolio</h1>
            <div id='portBtn'>
                <motion.button 
                    whileHover={{
                      scale:0.9,
                      originX:0,
  
                  }}
  
                  transition={{
                      type:spring,
                      stiffness:300
                  }}
                onClick={handleFront} id="UIbtn" data-aos="zoom-in"> UI's</motion.button>
                <motion.button
                    whileHover={{
                      scale:0.9,
                      originX:0,
  
                  }}
  
                  transition={{
                      type:spring,
                      stiffness:300
                  }}
                 onClick={handleBack} id="Apibtn" data-aos="zoom-in"> API's</motion.button>
            </div>
            <div id='div' data-aos="zoom-in">
            {frontend}
            </div>
           <div id='div' data-aos="zoom-in">
           {backend}
           </div>
        </div>
    </div>
  )
}

export default Portfolio