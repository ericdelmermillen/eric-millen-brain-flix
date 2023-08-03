import "./Main.scss";
// import axios from "axios"

import videos from "../../data/videos.json";

import VideoDetailsSection from "../VideoDetailsSection/VideoDetailsSection";
import NextVideos from "../NextVideos/NextVideos";

function Main({updateCurrentVideo, currentVideo}) {
  // console.log(currentVideo)
  
  return (
    <main className="main">

      <VideoDetailsSection updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo}/>

      <NextVideos videos={videos} updateCurrentVideo={updateCurrentVideo} currentVideoId={currentVideo.id}/> 

    </main>
  )};

export default Main;