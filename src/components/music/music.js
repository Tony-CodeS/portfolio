import React from 'react'
import "./music.css"
import thankgod from "../../assets/Sasha_Sloan_-_Thank_God_CeeNaija.com_.mp3"
import {GiSoundOn} from "react-icons/gi"
import {GiSoundOff} from "react-icons/gi"

function music() {
    const audio = new Audio(thankgod);
    audio.loop = true;
  return (
    <div>
        <div id="musicdiv">
         <p onClick={() => {
          audio.loop = true;
          audio.play()}}>    < GiSoundOn id='music' size={60}/> </p>
         <p onClick={() => {audio.loop = false; audio.pause()}}>    <GiSoundOff id='music' size={60}/></p>
        </div>
    </div>
  )
}

export default music