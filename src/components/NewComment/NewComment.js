import "./NewComment.scss";
import axios from "axios";
import { useState } from "react";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const VIDEOS_ENDPOINT = "videos";

function NewComment({ commentIcon, currentVideoId}) {
const BASE_URL = "http://localhost:8080/";

const [formSubmitted, setFormSubmitted] = useState(false);
const [commentData, setCommentData] = useState("");
const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    if (commentData.length >= 10) {
      setIsLoading(true);
      const commentDataObj = { comment: commentData, id: currentVideoId};
      
      axios
        .post(`${BASE_URL}${VIDEOS_ENDPOINT}/${currentVideoId}/comments`, commentDataObj)
        .then((response) => {
          setCommentData("");
          setFormSubmitted(false);
          setIsLoading(false);
        });
    }};
  
  return (
    <article className="hero__new-comment">

      <Avatar 
        avatarImg={`${BASE_URL}images/Mohan-muruge.jpg`} 
        ariaDescription={"profile icon for Mohan"}
      />

      <form id="commentForm" className="hero__form" onSubmit={(e) => handleSubmit(e)}>

        <div className="hero__form-inner">

          <label className="hero__comment-label" htmlFor="comment">JOIN THE CONVERSATION
            {formSubmitted && commentData.length < 10 && 
              <span className="not-valid">Too Short</span>
            }
          </label>
          
          <textarea 
            id="comment" 
            name="comment" 
            className={formSubmitted && commentData.length < 10
              ? "hero__comment-input invalid" 
              : "hero__comment-input"
            }
            placeholder="Add a new comment" 
            value={commentData}
            onChange={(e) => setCommentData(e.target.value)}
          />
          {isLoading && <LoadingSpinner /> }

        </div>

        <Button 
          buttonText="COMMENT" 
          iconSource={commentIcon} 
          iconAlt="comment icon"
          btnType={"submit"} 
          id="commentBtn" 
          onClick={handleSubmit}
        />

      </form>
    </article>
  )};

export default NewComment;