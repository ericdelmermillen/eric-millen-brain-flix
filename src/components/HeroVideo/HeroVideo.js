import videoDetails from "../../data/video-details.json";
import "./HeroVideo.scss"
import { useState } from "react";



const videosArr = videoDetails;

// console.log(videoDetails[0])
// need state here; default is videosArr[0]; when videoCardList is ready it will call setState and pass id of video to set as new current state

function HeroVideo() {
  const [ currentVideo, setCurrentVideo ] = useState(videosArr[0]);
  console.log(currentVideo.image)

  return (
      <div className="hero__video-container">
        <video className="hero__video" src="" type="" poster={currentVideo.image} controls>

        </video>
      </div>
  )
}

export default HeroVideo;