import "./Main.scss"
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import videoDetails from "../../data/video-details.json";

import avatar from "../../assets/images/Images/Mohan-muruge.jpg"
import viewsIcon from "../../assets/images/Icons/views.svg"
import likesIcon from "../../assets/images/Icons/likes.svg"
import commentIcon from "../../assets/images/Icons/add_comment.svg"

let date = new Date(videoDetails[0].timestamp).toLocaleDateString(
  "en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
      })


function Main() {

  // console.log(videoDetails[0].description)
  return (
    <main className="main">
      <h1 className="main__heading">Main</h1>

      <section className="hero__details">

        <h2 className="hero__heading">{videoDetails[0].title}</h2>

        <div className="hero__stats">
          <header className="hero__header">
            <h3>By {videoDetails[0].channel}</h3>
            <p>{date}</p>
          </header>


          <div className="hero__views">
            <img src={viewsIcon} alt="" />
            <p>{videoDetails[0].views}</p>
          </div>

          <div className="hero__likes">
            <img src={likesIcon} alt="" />
            <p>{videoDetails[0].likes}</p>
          </div>
        </div>

        <p className="hero__description">{videoDetails[0].description}</p>
        <p className="hero__comment-count">{videoDetails[0].comments.length} Comments</p>

      </section>
      
      <section className="hero__comment">
        
        <Avatar avatar={avatar}/>

        <form id="commentForm" class="hero__form" method="GET" >

          <label class="hero__comment-label" for="comment">JOIN THE CONVERSATION</label>
          <textarea class="hero__comment-input" id="comment" name="comment" placeholder="Add a new comment" minlength="100" />
          
          <Button id="commentBtn" buttonText="COMMENT" iconSource={commentIcon} iconAlt="comment icon"/>

        </form>

      </section>


    </main>
  )
}

export default Main