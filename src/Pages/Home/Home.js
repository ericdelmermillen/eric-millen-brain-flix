import axios from "axios";
import { useState, useEffect } from "react";

// need useParams to update active video
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import HeroVideo from "../../components/HeroVideo/HeroVideo";
import Main from "../../components/Main/Main";
import NotFound from "../../components/NotFound/NotFound";

function Home() {

  const {id} = useParams()

  const BASE_URL = "https://project-2-api.herokuapp.com/";
  const VIDEOS_ENDPOINT = "videos";
  const API_KEY = "?api_key=57312bbb-57e4-48cf-8bca-3cabccbdf8a4";
  // end of Environment Variables
  
  
  // state
  const [currentVideo, setCurrentVideo] = useState(null || id);

  const [isLoading, setIsLoading] = useState(true);
  const [videosListData, setVideosListData] = useState([]);
  // state for not found

  const navigate = useNavigate()

  // 1st axios
  useEffect(() => {
    // Call for videosList: get id of 0th video for videoDetails call
    axios
      .get(`${BASE_URL}${VIDEOS_ENDPOINT}${API_KEY}`)
      .then((response) => {
        setVideosListData(response.data);
        const targetVideoId = id || response.data[0].id;

        // 2nd axios
        // Call for videoDetails using id of params id or 0th video for default video

        axios
        .get(`${BASE_URL}${VIDEOS_ENDPOINT}/${targetVideoId}${API_KEY}`)
        .then((response) => {

          setCurrentVideo(response.data);
          setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching video details:", error);
            setIsLoading(false);
            navigate("/NotFound")
            
          }); // 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
          navigate("/NotFound")

      });
  }, [id]);
  

  if (isLoading) {
    // !currentVideoId
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div className="app__inner-container">
        <h1>Yo from Home</h1>

        <HeroVideo currentVideoPoster={currentVideo.image} />

        <Main currentVideo={currentVideo} videosListData={videosListData}/>
      </div>
    </div>
  );
}

export default Home;
