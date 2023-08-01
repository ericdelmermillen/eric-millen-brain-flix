import "./App.scss";
import videoDetails from "../src/data/video-details.json";

import { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import VideoUpload from "./Pages/VideoUpload";


function App() {
  const defaultVideo = videoDetails[0];
  const [currentVideo, setCurrentVideo] = useState(defaultVideo); 

  function updateCurrentVideo(id) {
    id === undefined 
      ? setCurrentVideo(defaultVideo)
      : setCurrentVideo(videoDetails.find((video) => video.id === id));
  }

  return (
    
    <>
    <Header currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo} defaultVideo={defaultVideo}/>
      <Routes>
        <Route path="/" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} />
        
        {/* <Route path="/" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} /> */}

        
        <Route path="/upload" element={<VideoUpload/>} />

        <Route path="/:videoId" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} />

        {/* <Route path="/:title" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} /> */}
      </Routes>
    </>
    
  )};


export default App;