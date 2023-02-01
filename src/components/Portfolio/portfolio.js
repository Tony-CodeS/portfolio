import React from 'react'
import "./portfolio.css"
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useState } from 'react'
import front1 from '../../assets/BLOGR.png'
import front2 from '../../assets/dispatch.png'
import front3 from '../../assets/auth.png'
import front4 from '../../assets/Untitled-1.png'
// import front5 from '../../assets/todo.png'
import Apiphoto from '../../assets/apiphoto.png'

function Portfolio() {
  useEffect(() => {
    Aos.init({duration:1000})
   }, []);
    const frontEndArray =[{    photo:front1, title:'BLOGRS', description:'the inspiration was for this project was gotten from frontend Mentor'},
    {    photo:front2, title:'Dispatch.ng', description:'A Dispatch Landing page for ordering rides and delivering goods'},
    {    photo:front3, title:'Authentication app', description:'An authentication app built with firebase as backend'},
    {    photo:front4, title:'Easy-Bank', description:' A loan app landing page built with HTML and CSS'},
    {    photo:front4, title:'TODO', description:' TODO APP built with react.js'},
  ] 

  const BackendArray =[ {    photo:Apiphoto, title:'FriendsApp', description:'An API that collects individual user`s details and authenticates users'},
  {    photo:Apiphoto, title:'OpenSea', description:'An API that only handles post requests '},
  {    photo:Apiphoto, title:'Dispatch', description:'An API collects users email for Email Newsletter subscription'},
  {    photo:Apiphoto, title:'FriendsApp', description:'An API that collects individual user`s details and authenticates users'},
  {    photo:Apiphoto, title:'FriendsApp', description:'An API that collects individual user`s details and authenticates users'}
]
  
const [frontend, setfrontend] = useState(frontEndArray.map(port =>{
    return(
    
           <div id="div" data-aos="zoom-in">
           <div id='img-div'>
      <img src={port.photo} alt="..." id='img'/>
      <div id="card-description">
        <h2 id='port-title'>{port.title}</h2>
        <p>
        {port.description}
        </p>
        <button id='workbtn'>View Demo</button>
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
         <button id='workbtn'>View Demo</button>
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
         <button id='workbtn'>View Demo</button>
       </div>
     </div>
     </div>
            )
        })
    )
}
  return (
    <div>
        <div>
            <h1 data-aos="flip-right"> Portfolio</h1>
            <div id='portBtn'>
                <button onClick={handleFront} id="UIbtn" data-aos="zoom-in"> UI's</button>
                <button onClick={handleBack} id="Apibtn" data-aos="zoom-in"> API's</button>
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