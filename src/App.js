import "./App.scss";
// import videoDetails from "../src/data/video-details.json";
import axios from "axios"

import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';


import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import NotFound from "./components/NotFound/NotFound";
import VideoUpload from "./Pages/VideoUpload";


function App() {
  // const defaultVideo = videoDetails[0];
  const [currentVideo, setCurrentVideo] = useState(null); 

  // function updateCurrentVideo(id) {
  //   id === undefined 
  //     ? setCurrentVideo(defaultVideo)
  //     : setCurrentVideo(videoDetails.find((video) => video.id === id));
  // }

  useEffect(() => {
      const BASE_URL = "https://project-2-api.herokuapp.com/"
      const VIDEOS_ENDPOINT = "videos"
      const API_KEY = "?api_key=57312bbb-57e4-48cf-8bca-3cabccbdf8a4"

        axios
        .get(`${BASE_URL}${VIDEOS_ENDPOINT}${API_KEY}`)
        .then((response) => {
          console.log(response.data[0]);
          setCurrentVideo(response.data[0])
          console.log("Set");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          return <div>Looding...</div>
        });
}, []);


  return (
    
    <>
    <Header 
    // onClickCallBack={updateCurrentVideo} defaultVideo={defaultVideo}
    />
    
      <Routes>
        {/* <Route path="/" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} /> */}
        
        {/* <Route path="/" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} /> */}

        
        {/* <Route path="/upload" element={<VideoUpload onClickCallBack={updateCurrentVideo} defaultVideo={defaultVideo}/>} />

        <Route path="/:videoId" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} /> */}


        <Route path="/*" element={<NotFound/>} />


        {/* <Route path="/:title" element={<Home currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/>} /> */}
      </Routes>
    </>
    
  )};


export default App;