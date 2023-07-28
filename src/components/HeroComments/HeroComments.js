import "./HeroComments.scss"
import Avatar from "../Avatar/Avatar";

function HeroComments({currentVideo}) {

  console.log(currentVideo)
  return (
    
    <section className="hero__comments">

    <div className="comment">
      <Avatar />

{/* <Comment here (or HeroComment) */}
      <div className="comment__text">

        <p className="comment__name">{currentVideo.comments[0].name}
          <span className="comment__date">{currentVideo.comments[0].timestamp}</span>
        </p>
        <p>{currentVideo.comments[0].comment}</p>

      </div>

    </div>

  </section>

  )
}

export default HeroComments