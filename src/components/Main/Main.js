import "./Main.scss"

import NewComment from "../NewComment/NewComment";
import HeroComments from "../HeroComments/HeroComments";

import HeroDetails from "../HeroDetails/HeroDetails";
import NextVideos from "../NextVideos/NextVideos";
import videos from "../../data/videos.json";

import avatar from "../../assets/images/Images/Mohan-muruge.jpg"
import viewsIcon from "../../assets/images/Icons/views.svg"
import likesIcon from "../../assets/images/Icons/likes.svg"
import commentIcon from "../../assets/images/Icons/add_comment.svg"


function Main({updateCurrentVideo, currentVideo}) {
  // const [currentVideo, setCurrentVideo] = useState(videoDetails[0]); 



  return (
    <main className="main">
      <HeroDetails currentVideo={currentVideo} viewsIcon={viewsIcon} likesIcon={likesIcon}/>

      <NewComment commentIcon={commentIcon} avatar={avatar}/>
    
      <HeroComments currentVideo={currentVideo} avatar={avatar}/>


      <NextVideos videos={videos} updateCurrentVideo={updateCurrentVideo}/> 
    </main>
  )
}

export default Main