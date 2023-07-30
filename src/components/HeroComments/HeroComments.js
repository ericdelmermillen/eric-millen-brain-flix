import "./HeroComments.scss";

import CommentCard from "../CommentCard/CommentCard";

function HeroComments({ currentVideo }) {
  const {comments} = currentVideo;

  return (
    <section className="hero__comments" role="list">
      {comments.map((comment) => 
        <CommentCard
          key={comment.id} 
          comment={comment}
        />
      )}

    </section>
  )}

export default HeroComments;
