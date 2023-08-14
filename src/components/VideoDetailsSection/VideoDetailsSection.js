import "./VideoDetailsSection.scss";

import avatar from "../../assets/images/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/Icons/add_comment.svg"
import likesIcon from "../../assets/images/Icons/likes.svg";
import viewsIcon from "../../assets/images/Icons/views.svg";

import HeroComments from "../HeroComments/HeroComments";
import HeroDetails from "../HeroDetails/HeroDetails";
import NewComment from "../NewComment/NewComment";

function VideoDetailsSection({ currentVideo}) {
  
  return (

    <section className="video-details">

      <HeroDetails currentVideo={currentVideo} viewsIcon={viewsIcon} likesIcon={likesIcon}/>

      <NewComment 
        avatarImg={avatar} 
        commentIcon={commentIcon} 
        currentVideoId={currentVideo.id}
        />

      <HeroComments currentVideo={currentVideo} avatar={avatar}/>

    </section>
    
  )};

export default VideoDetailsSection;