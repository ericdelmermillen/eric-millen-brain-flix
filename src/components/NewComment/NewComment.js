import "./NewComment.scss";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

function NewComment({avatar, commentIcon}) {
  return (
    <article className="hero__new-comment">

      <Avatar avatar={avatar}/>

      <form id="commentForm" className="hero__form" method="POST" >
        <div className="hero__form-inner">
          <label className="hero__comment-label" htmlFor="comment">JOIN THE CONVERSATION</label>
          
          <textarea className="hero__comment-input" id="comment" name="comment" placeholder="Add a new comment" />
        </div>

        <Button id="commentBtn" buttonText="COMMENT" btnType={"submit"} iconSource={commentIcon} iconAlt="comment icon"/>

      </form>
    </article>
  )};

export default NewComment;