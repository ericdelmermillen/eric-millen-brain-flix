import "./Main.scss"
import { useState } from "react";

import NewComment from "../NewComment/NewComment";
import HeroComments from "../HeroComments/HeroComments";

import HeroDetails from "../HeroDetails/HeroDetails";
import videoDetails from "../../data/video-details.json";
import videos from "../../data/videos.json";

import avatar from "../../assets/images/Images/Mohan-muruge.jpg"
import viewsIcon from "../../assets/images/Icons/views.svg"
import likesIcon from "../../assets/images/Icons/likes.svg"
import commentIcon from "../../assets/images/Icons/add_comment.svg"


let commentDate = new Date(videoDetails[0].comments[0].timestamp).toLocaleDateString(
  "en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })


function Main() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]); 

  return (
    <main className="main">
      <h1 className="main__heading">Main</h1>

      <HeroDetails currentVideo={currentVideo} viewsIcon={viewsIcon} likesIcon={likesIcon}/>

      <NewComment commentIcon={commentIcon} avatar={avatar}/>

      <HeroComments currentVideo={currentVideo} avatar={avatar}/>
      
      <section className="next-videos">
        <h2 className="next-videos__heading">NEXT VIDEOS</h2>
        <div className="video__list">
          
          <div className="video">
            <img className="video__thumbnail" src={videos[1].image} alt="" />
            <div className="video__text">
              <h3 className="video__title">{videos[1].title}</h3>
              <p className="video__channel">{videos[1].channel}</p>
            </div>

          </div>
        </div>

      </section>


    </main>
  )
}

export default Main