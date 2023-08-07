import Avatar from "../Avatar/Avatar";
import "./CommentCard.scss";

function CommentCard({ comment }) {
  const { comment: commentText, name, timestamp } = comment; 

  let formattedTimestamp = new Date(timestamp).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="comment">
      <Avatar />
      <div className="comment__text">
        <p className="comment__name">{name}
          <span className="comment__date">
            {formattedTimestamp}
          </span>
        </p>
        <p>{commentText}</p> 
      </div>
    </div>
  )};

export default CommentCard;
