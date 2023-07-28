import "./Main.scss"
import { useState } from "react";

import NewComment from "../NewComment/NewComment";
import HeroComments from "../HeroComments/HeroComments";

import HeroDetails from "../HeroDetails/HeroDetails";
import NextVideos from "../NextVideos/NextVideos";
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

      <NextVideos videos={videos}/>




    </main>
  )
}

export default Main