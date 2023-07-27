import videoDetails from "../../data/video-details.json";
import "./HeroVideo.scss"

const videosArr = videoDetails;
// console.log(videosArr)

// console.log(videoDetails[0])

function HeroVideo() {
  return (
    <>
      <div><h3>HeroVideo</h3></div>
      {/* <img src={videoDetails[0].image} alt="" /> */}
    </>
  )
}

export default HeroVideo;