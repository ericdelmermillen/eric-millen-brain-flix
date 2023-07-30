import "./NewComment.scss";

import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";

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
  )}

export default NewComment;