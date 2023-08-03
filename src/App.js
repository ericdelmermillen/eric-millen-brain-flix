import "./App.scss";
import videoDetails from "../src/data/video-details.json";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";

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
      <BrowserRouter>
        <Header defaultVideo={defaultVideo} updateCurrentVideo={updateCurrentVideo}/>
        <Routes>

          <Route path="/" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} /> 

          <Route path="/:videoId" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>}/>

          <Route path="/upload" element={<VideoUpload />}/>

          <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
    </>
  )};

export default App;