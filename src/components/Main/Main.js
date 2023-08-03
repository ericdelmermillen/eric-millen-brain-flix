import "./Main.scss";

import videos from "../../data/videos.json";

import VideoDetailsSection from "../VideoDetailsSection/VideoDetailsSection";
import NextVideos from "../NextVideos/NextVideos";

function Main({updateCurrentVideo, currentVideo, videosListData}) {
  
  return (
    <main className="main">

      <VideoDetailsSection currentVideo={currentVideo}/>

      <NextVideos 
        videosListData={videosListData} 
        updateCurrentVideo={updateCurrentVideo} 
        currentVideoId={currentVideo.id} 
        videos={videos}/> 

    </main>
  )};

export default Main;