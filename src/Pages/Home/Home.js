import axios from "axios";
import { useState, useEffect } from "react";

import HeroVideo from "../../components/HeroVideo/HeroVideo";
import Main from "../../components/Main/Main";

function Home() {
  const BASE_URL = "https://project-2-api.herokuapp.com/";
  const VIDEOS_ENDPOINT = "videos";
  const API_KEY = "?api_key=57312bbb-57e4-48cf-8bca-3cabccbdf8a4";

  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [defaultVideo, setDefaultVideo] = useState(null);
  const [videosListData, setVideosListData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${VIDEOS_ENDPOINT}${API_KEY}`)
      .then((response) => {
        setVideosListData(response.data);
        const defaultVideoId = response.data[0].id;
        
        axios
        .get(`${BASE_URL}${VIDEOS_ENDPOINT}/${defaultVideoId}${API_KEY}`)
        .then((response) => {
          setCurrentVideo(response.data);
          setDefaultVideo(response.data);
          setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  function updateCurrentVideo(id) {
    if (!id) {
      setCurrentVideo(defaultVideo);
    } else {
      setCurrentVideo(videosListData.find((video) => video.id === id));
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div className="app__inner-container">
        <h1>Yo from Home</h1>

        <HeroVideo currentVideo={currentVideo} updateCurrentVideo={updateCurrentVideo} />
        <Main updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo} />
      </div>
    </div>
  );
}

export default Home;
