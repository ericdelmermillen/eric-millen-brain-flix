import "./HeroVideo.scss";

function HeroVideo({currentVideo}) {


  return (

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