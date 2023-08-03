import axios from "axios";
import { useState, useEffect } from "react";

// need useParams to update active video
import { useParams } from 'react-router-dom';

import HeroVideo from "../../components/HeroVideo/HeroVideo";
import Main from "../../components/Main/Main";


function Home() {

  const {id} = useParams()
  // id exists

  const BASE_URL = "https://project-2-api.herokuapp.com/";
  const VIDEOS_ENDPOINT = "videos";
  const API_KEY = "?api_key=57312bbb-57e4-48cf-8bca-3cabccbdf8a4";

  const [currentVideoId, setCurrentVideoId] = useState(id);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [defaultVideo, setDefaultVideo] = useState(null);
  const [videosListData, setVideosListData] = useState([]);
  // state for not found

  useEffect(() => {
    axios
    // keep this
      .get(`${BASE_URL}${VIDEOS_ENDPOINT}${API_KEY}`)
      .then((response) => {
        setVideosListData(response.data);
        const defaultVideoId = response.data[0].id;
        // isNotFound false
        // 0th id >>> HeroVideo; pass as props to Hero video; HeroVideo calls for Video Details
        
        axios
        .get(`${BASE_URL}${VIDEOS_ENDPOINT}/${defaultVideoId}${API_KEY}`)
        .then((response) => {
          setCurrentVideo(response.data);
          // setDefaultVideo(response.data);
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




//   useEffect(() => {
//     axios
//         .get(`${BASE_URL}${VIDEOS_ENDPOINT}/${currentVideoId}${API_KEY}`)
//         .then((response) => {
//           setCurrentVideo(response.data);
//           setIsLoading(false);
//           })
//           .catch((error) => {
//             console.error("Error fetching data:", error);
//             setIsLoading(false);
//           });
//         }, [currentVideoId])
// const currentVideoId = id || videosListData[0].id

// in no video id: return loading


  function updateCurrentVideo(id) {
    if (!id) {
      setCurrentVideo(defaultVideo);
    } else {
      // console.log("Breaks here")
      // console.log(videosListData)
      // console.log(id)
      setCurrentVideo(videosListData.find((video) => video.id === id));
      // setCurrentVideo("1b964601-a6dd-4fcc-b5f3-1000338c9557")
      // setCurrentVideo(videosListData.find((video) => console.log(video.id)));
    }
  }

  // var = currentvideoid(param id) || videoslist[0].id 

  if (isLoading) {
    // !currentVideoId
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div className="app__inner-container">
        <h1>Yo from Home</h1>

        <HeroVideo currentVideo={currentVideo} />
        {/* currentVideo being passed as state therefore will rerender on change */}
        {/* needs currentVideoId props: params id valuue or 0th from videoslist */}

        <Main updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo} videosListData={videosListData}/>
        {/* pass main videoList state props: can be full array or filter */}
      </div>
    </div>
  );
}

export default Home;
