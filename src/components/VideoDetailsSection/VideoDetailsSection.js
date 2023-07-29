import "./VideoDetailsSection.scss"

import viewsIcon from "../../assets/images/Icons/views.svg";
import likesIcon from "../../assets/images/Icons/likes.svg";
import commentIcon from "../../assets/images/Icons/add_comment.svg"
import avatar from "../../assets/images/Images/Mohan-muruge.jpg";

import HeroDetails from "../HeroDetails/HeroDetails";
import NewComment from "../NewComment/NewComment";
import HeroComments from "../HeroComments/HeroComments";

function VideoDetailsSection({updateCurrentVideo, currentVideo}) {
  return (
    <section className="video-details">
      <HeroDetails currentVideo={currentVideo} viewsIcon={viewsIcon} likesIcon={likesIcon}/>
      <NewComment commentIcon={commentIcon} avatar={avatar}/>
      <HeroComments currentVideo={currentVideo} avatar={avatar}/>
    </section>
    
  )}

export default VideoDetailsSection