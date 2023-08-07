import "./HeroVideo.scss";

import Loading from "../Loading/Loading";

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
        : ( <Loading /> )}
    </div>
  )};

export default HeroVideo; 