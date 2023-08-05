import "./HeroVideo.scss";

function HeroVideo({currentVideoPoster}) {

  return (

    <div className="hero__video-container">

      {currentVideoPoster 
      ? ( <video 
            className="hero__video" 
            src="" 
            poster={currentVideoPoster} 
            controls>
            </video> ) 
        : ( <div>Loading video...</div> )}
    </div>
  )};

export default HeroVideo; 