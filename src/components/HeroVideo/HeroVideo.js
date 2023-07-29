import "./HeroVideo.scss"

function HeroVideo({currentVideo}) {
  return (
      <div className="hero__video-container">
        <video className="hero__video" src="" type="" poster={currentVideo.image} controls></video>
      </div>
  )}

export default HeroVideo;