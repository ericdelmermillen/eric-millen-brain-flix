import "./App.scss";

// state: needed in Home -- cut
import videoDetails from "../src/data/video-details.json";

import { useState } from "react";

// --to here

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import NotFound from "./components/NotFound/NotFound";
import VideoUpload from "./Pages/VideoUpload";


function App() {

  // cut
  
  const defaultVideo = videoDetails[0];
  const [currentVideo, setCurrentVideo] = useState(defaultVideo); 
  
  function updateCurrentVideo(id) {
    id === undefined 
    ? setCurrentVideo(defaultVideo)
    : setCurrentVideo(videoDetails.find((video) => video.id === id));
  }

  // to here  and move to Home

  return (
    
    <>
      <BrowserRouter>
        <Header />
          <Routes>
        
            <Route path="/" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} /> 
            {/* this wil no longer require props once Home is responsible for state: remove currentVideoa nd updateCurrentVideo */}

        
            <Route path="/video/:videoId" element={<Home />}/>
        
            <Route path="/upload" element={<VideoUpload />}/>

            <Route path="*" element={<NotFound/>} />

          </Routes>
        </BrowserRouter>
    </>
    
  )};


export default App;