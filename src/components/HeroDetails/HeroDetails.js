import "./HeroDetails.scss"; 

function HeroDetails({currentVideo, likesIcon, viewsIcon }) {
  const {channel, comments, description, likes, timestamp, title, views} = currentVideo;

  let date = new Date(timestamp).toLocaleDateString(
    "en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });

  return (
    <article className="hero__details">
      <h2 className="hero__heading">{title}</h2>
      <div className="hero__stats">
        <header className="hero__header">
          <p className="hero__header-channel">By {channel}</p>
          <p className="hero__header-date">{date}</p>
        </header>
        <div className="hero__numbers">
          <div className="hero__views">
            <img className="hero__icon" src={viewsIcon} alt="views icon" />
            <p>{views}</p>
          </div>
          <div className="hero__likes">
            <img className="hero__icon" src={likesIcon} alt="likes icon" />
            <p>{likes}</p>
          </div>
        </div>

      </div>

      <p className="hero__description">{description}</p>
      <p className="hero__comment-count">{comments.length || 0} Comments</p> 
    </article>
  )};

export default HeroDetails;