import "./Main.scss";

import NextVideos from "../NextVideos/NextVideos";
import VideoDetailsSection from "../VideoDetailsSection/VideoDetailsSection";

function Main({ currentVideo, videosListData}) {
  
  return (
    <main className="main">

      <VideoDetailsSection 
        currentVideo={currentVideo}
      />

      <NextVideos 
        videosListData={videosListData} 
        currentVideoId={currentVideo.id} 
      /> 

    </main>
  )};

export default Main;