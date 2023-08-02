import "./Main.scss";
// import axios from "axios"
import { useState, useEffect } from "react";

import videos from "../../data/videos.json";

import VideoDetailsSection from "../VideoDetailsSection/VideoDetailsSection";
import NextVideos from "../NextVideos/NextVideos";

function Main({updateCurrentVideo, currentVideo}) {

//   useEffect(() => {
//     const BASE_URL = "https://project-2-api.herokuapp.com/"
//     const VIDEOS_ENDPOINT = "videos"
//     const API_KEY = "?api_key=57312bbb-57e4-48cf-8bca-3cabccbdf8a4"

//       axios
//       .get(`${BASE_URL}${VIDEOS_ENDPOINT}${API_KEY}`)
//       .then((response) => {
//         console.log(response.data[0]);
//         // setCurrentVideo(response.data[0])
//         console.log("Set");
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         return <div>Looding...</div>
//       });
// }, []);
  
  return (
    <main className="main">

      <VideoDetailsSection updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo}/>

      <NextVideos videos={videos} updateCurrentVideo={updateCurrentVideo} currentVideoId={currentVideo.id}/> 

    </main>
  )};

export default Main;