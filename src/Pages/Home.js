
import HeroVideo from "../components/HeroVideo/HeroVideo";
import Main from "../components/Main/Main";

function Home( {currentVideo, updateCurrentVideo} ) {

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

