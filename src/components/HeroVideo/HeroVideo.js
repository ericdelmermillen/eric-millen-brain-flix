import videoDetails from "../../data/video-details.json";
import "./HeroVideo.scss"
import { useState } from "react";


const videosArr = videoDetails;


function HeroVideo({currentVideo}) {
  console.log(currentVideo)


  return (
      <div className="hero__video-container">
        <video className="hero__video" src="" type="" poster={currentVideo.image} controls>

        </video>
      </div>
  )
}

export default HeroVideo;