import "./Video.scss";
import { Link } from "react-router-dom";

function Video({video}) {
  const { channel, id, image, title} = video;

  return (

      <Link to={`/videos/${id}`} className="video-link">
        <div className="video" >
          <img className="video__thumbnail" src={image} alt="" />
          <div className="video__text">
            <h4 className="video__title">{
              title}</h4>
            <p className="video__channel">{channel}</p>
          </div>
        </div>
      </Link>

  )};

export default Video;