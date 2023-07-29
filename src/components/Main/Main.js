import "./Main.scss";

import VideoDetailsSection from "../VideoDetailsSection/VideoDetailsSection";

import NextVideos from "../NextVideos/NextVideos";
import videos from "../../data/videos.json";

function Main({updateCurrentVideo, currentVideo}) {
  return (
    <main className="main">
      <VideoDetailsSection updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo}/>
      <NextVideos videos={videos} updateCurrentVideo={updateCurrentVideo} currentVideoId={currentVideo.id}/> 
    </main>
  )}

export default Main