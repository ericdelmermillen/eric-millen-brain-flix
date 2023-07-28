import "./HeroComments.scss";

import CommentCard from "../CommentCard/CommentCard";

function HeroComments({ currentVideo }) {
  const {comments} = currentVideo;
  // console.log(comments)


  return (
    <section className="hero__comments">
      {comments.map((comment) => 
        <CommentCard
          key={comment.id} comment={comment}
        />
      )}

    </section>
  );
}

export default HeroComments;
