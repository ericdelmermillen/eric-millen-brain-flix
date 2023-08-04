import "./Main.scss";

import VideoDetailsSection from "../VideoDetailsSection/VideoDetailsSection";
import NextVideos from "../NextVideos/NextVideos";

// function Main({updateCurrentVideo, currentVideo, videosListData}) {
function Main({ currentVideo, videosListData}) {
  
  return (
    <main className="main">

      <VideoDetailsSection currentVideo={currentVideo}/>

      <NextVideos 
        videosListData={videosListData} 
        currentVideoId={currentVideo.id} 
      /> 

    </main>
  )};

export default Main;