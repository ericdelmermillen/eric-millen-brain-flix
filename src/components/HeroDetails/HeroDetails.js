import "./HeroDetails.scss"; 


function HeroDetails({currentVideo, viewsIcon, likesIcon}) {
  const {title, channel, description, views, likes, comments, timestamp} = currentVideo;

  let date = new Date(timestamp).toLocaleDateString(
    "en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      })

  return (
    
    <section className="hero__details">
      <h2 className="hero__heading">{title}</h2>

    <div className="hero__stats">
      <header className="hero__header">
        <h3>By {channel}</h3>
        <p>{date}</p>
      </header>

      <div className="hero__views">
        <img src={viewsIcon} alt="" />
        <p>{views}</p>
      </div>

      <div className="hero__likes">
        <img src={likesIcon} alt="" />
        <p>{likes}</p>
      </div>
    </div>
    <p className="hero__description">{description}</p>
    <p className="hero__comment-count">{comments.length} Comments</p> 

  </section>
  )
}

export default HeroDetails;