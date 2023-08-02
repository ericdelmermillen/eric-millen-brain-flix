// import { useParams } from "react-router-dom";
import axios from "axios"

import HeroVideo from "../components/HeroVideo/HeroVideo";
import Main from "../components/Main/Main";

function Home( {currentVideo, updateCurrentVideo} ) {
  
    
    // if no data return loading <elem>
    // else

//   useEffect(() => {
//       const BASE_URL = "https://project-2-api.herokuapp.com/"
//       const VIDEOS_ENDPOINT = "videos"
//       const API_KEY = "?api_key=57312bbb-57e4-48cf-8bca-3cabccbdf8a4"

//         axios
//         .get(`${BASE_URL}${VIDEOS_ENDPOINT}${API_KEY}`)
//         .then((response) => {
//           console.log(response.data[0].id);
//           setCurrentVideo(response.data[0])
//           console.log("Set");
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           return <div>Looding...</div>
//         });
// }, []);



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

