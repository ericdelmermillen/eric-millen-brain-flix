import "./HeroVideo.scss";

import Loading from "../Loading/Loading";

function HeroVideo({currentVideoPoster, BASE_URL}) {

  return (

    <div className="hero__video-container">
      {currentVideoPoster 
      ? ( <video 
            className="hero__video" 
            src="" 
            poster={`${BASE_URL}/${currentVideoPoster}`} 
            controls>
            </video> ) 
        : ( <Loading /> )}
    </div>
  )};

export default HeroVideo; 