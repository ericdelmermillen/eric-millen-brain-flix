import "./Home.scss"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import HeroVideo from "../../components/HeroVideo/HeroVideo";
import Loading from "../../components/Loading/Loading";
import Main from "../../components/Main/Main";

function Home() {

  const {id} = useParams()

  const BASE_URL = "https://project-2-api.herokuapp.com/";
  const VIDEOS_ENDPOINT = "videos";
  const API_KEY = "?api_key=57312bbb-57e4-48cf-8bca-3cabccbdf8a4";
  
  // state
  const [currentVideo, setCurrentVideo] = useState(null || id);
  const [isLoading, setIsLoading] = useState(true);
  const [videosListData, setVideosListData] = useState([]);

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

          setTimeout(() => setIsLoading(false), 500);

          })
          .catch((error) => {
            console.error("Error fetching video details:", error);
            
            setTimeout(() => setIsLoading(false), 500);

            navigate("/NotFound")
          }); 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setTimeout(() => setIsLoading(false), 500);
          navigate("/NotFound")
      });
  }, [id, navigate]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
        <div className="hero">
          <div className="hero__inner">
            <HeroVideo currentVideoPoster={currentVideo.image} />
          </div>
        </div>

        <Main currentVideo={currentVideo} videosListData={videosListData}/>
    </>
  )};

export default Home;
