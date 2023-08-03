import "./HeroVideo.scss";

function HeroVideo({currentVideo}) {


  return (
    // makes own axios call for videoDetails; useEffect;dependency of currentVideoId
    // error handling for invalid id from axios in catch : render error or navigate to not found

      <div className="hero__video-container">

        {currentVideo 
        ? ( <video 
              className="hero__video" 
              src="" 
              type="" 
              poster={currentVideo.image} 
              controls>
              </video> ) 
          : ( <div>Loading video...</div> )}

      </div>
  )};

export default HeroVideo; 