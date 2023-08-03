import axios from "axios";
import { useEffect } from "react";


import HeroVideo from "../../components/HeroVideo/HeroVideo";
import Main from "../../components/Main/Main";

function Home( {currentVideo, updateCurrentVideo} ) {
  
const BASE_URL = "https://project-2-api.herokuapp.com/"
const VIDEOS_ENDPOINT = "videos"
const API_KEY = "?api_key=57312bbb-57e4-48cf-8bca-3cabccbdf8a4"
  
    
    // if no data return loading <elem>
    // else

  useEffect(() => {

    axios
    .get(`${BASE_URL}${VIDEOS_ENDPOINT}${API_KEY}`)
    .then((response) => {

      // response.data is equivalent to videos.json
      
    const defaultVideoId = response.data[0].id;
    console.log(`State for Video Details: ${defaultVideoId}`)
  
    axios
    .get(`${BASE_URL}${VIDEOS_ENDPOINT}/${defaultVideoId}${API_KEY}`)
    .then((response) => {

      const videosListData = response.data;

      console.log(videosListData)
    })
      
  })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return <div>Looding...</div>
    });
}, []);


  return (

    <div className="app">
      <div className="app__inner-container">
        <h1>Yo from Home</h1>

        <HeroVideo currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo}/> 

        <Main updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo}/> 
      </div>
    </div>
  )};

export default Home;

