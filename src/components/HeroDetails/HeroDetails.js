import "./HeroDetails.scss"; 

function HeroDetails({currentVideo, viewsIcon, likesIcon}) {
  const {channel, comments, description, likes, timestamp, title, views} = currentVideo;

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
          <p className="hero__header-channel">By {channel}</p>
          <p className="hero__header-date">{date}</p>
        </header>
        <div className="hero__numbers">
          <div className="hero__views">
            <img className="hero__icon" src={viewsIcon} alt="" />
            <p>{views}</p>
          </div>
          <div className="hero__likes">
            <img className="hero__icon" src={likesIcon} alt="" />
            <p>{likes}</p>
          </div>
        </div>

      </div>

      <p className="hero__description">{description}</p>
      <p className="hero__comment-count">{comments.length} Comments</p> 
    </section>
  )}

export default HeroDetails;