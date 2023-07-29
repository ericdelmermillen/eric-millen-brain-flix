import { useState } from "react";
import "./App.scss";
import videoDetails from "../src/data/video-details.json";

import Header from "./components/Header/Header";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import Main from "./components/Main/Main";

function App() {

  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]); 

  function updateCurrentVideo(id) {
    setCurrentVideo(videoDetails.find((video) => video.id === id));
  }

  return (
    <div className="App">

      <Header />

      <HeroVideo currentVideo={currentVideo}/>

      <Main updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo}/>

    </div>
  )}

export default App;