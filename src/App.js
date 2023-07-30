import { useState } from "react";
import "./App.scss";
import videoDetails from "../src/data/video-details.json";

import Header from "./components/Header/Header";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import Main from "./components/Main/Main";

function App() {
  const defaultVideo = videoDetails[0];
  const [currentVideo, setCurrentVideo] = useState(defaultVideo); 

  function updateCurrentVideo(id) {
    setCurrentVideo(videoDetails.find((video) => video.id === id));
  }

  return (
    <div className="app">

      <div className="app__inner-container">

        <Header />

        <HeroVideo currentVideo={currentVideo}/>

        <Main updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo}/>
        
      </div>

    </div>
  )}

export default App;