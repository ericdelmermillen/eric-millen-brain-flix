import "./App.scss";
import "./styles/partials/_global.scss"
import "./styles/partials/_variables.scss";
import { useState } from "react";

import Header from "./components/Header/Header";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import Main from "./components/Main/Main";

import videoDetails from "../src/data/video-details.json";

function App() {

  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]); 

  function updateCurrentVideo(id) {
    console.log("App")
    setCurrentVideo(videoDetails.find((video) => video.id === id));
  }

  return (
    <div className="App">
      <Header />
      <HeroVideo currentVideo={currentVideo}/>
      <Main updateCurrentVideo={updateCurrentVideo} currentVideo={currentVideo}/>
    </div>
  )}

export default App;

// Questions
// Should all componets end up with the same class or should they have classes that refelect their BEM use within their parent? (.header__search vs just .search ?)
// If they get the same class everywhere they are used, how do you selected them to change them where they are being used without a complex selector? 
// If they get unique classses relative to their BEM functionality within the parent how do you apply the base classes without applying them in every place they are used?