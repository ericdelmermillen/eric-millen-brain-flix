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

    <>
    {/* BrowserRouter */}
    <Header />
    
    {/* Routes */}

    <div className="app">

      <div className="app__inner-container">




        {/* Route */}
        <HeroVideo currentVideo={currentVideo}/>
        {/* Route */}


        {/* Route */}
        <Main updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo}/>
        {/* Route */}
        
      {/* Routes */}


      </div>
    </div>
    {/* BrowserRouter */}
    </>
    
  )}

export default App;