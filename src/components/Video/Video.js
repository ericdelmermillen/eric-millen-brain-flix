import { Link } from "react-router-dom";
import "./Video.scss";

function Video({video, updateCurrentVideo}) {
  const { channel, id, image, title} = video;

  return (

      <Link to={`/videos/${id}`} className="video-link">
        {/* <Route path="/videos/:id" element={<Home />}/> */}
        <div className="video" >
        {/* <div className="video"> */}
          <img className="video__thumbnail" src={image} alt="" />
          <div className="video__text">
            <h4 className="video__title">{
              title.length > 30 
              ? title.slice(0, 30) + "..."
              : title
            }</h4>
            <p className="video__channel">{channel}</p>
          </div>
        </div>
      
      </Link>

  )};

export default Video;