import "./Main.scss";

import NextVideos from "../NextVideos/NextVideos";
import VideoDetailsSection from "../VideoDetailsSection/VideoDetailsSection";

function Main({ currentVideo, videosListData,BASE_URL}) {
  
  return (
    <main className="main">

      <VideoDetailsSection 
        currentVideo={currentVideo}
      />

      <NextVideos 
        videosListData={videosListData} 
        currentVideoId={currentVideo.id} 
        BASE_URL={BASE_URL}
      /> 

    </main>
  )};

export default Main;