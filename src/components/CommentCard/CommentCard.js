import Avatar from "../Avatar/Avatar";

function CommentCard({ comment }) {
  const { name, comment: commentText, timestamp } = comment; 

  let formattedTimestamp = new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="comment">
      <Avatar />
      <div className="comment__text">
        <p className="comment__name">
          {name}
          <span className="comment__date">{formattedTimestamp}</span>
        </p>
        <p>{commentText}</p> 
      </div>
    </div>
  );
}

export default CommentCard;
