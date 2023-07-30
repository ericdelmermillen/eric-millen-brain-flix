import "./Video.scss"

function Video({video, updateCurrentVideo}) {
  const { channel, id, image, title} = video;

  return (
      <div className="video" onClick={() => updateCurrentVideo(id)}>
        <img className="video__thumbnail" src={image} alt="" />
        <div className="video__text">
          <h3 className="video__title">{
            title.length > 40 
              ? title.slice(0, 40) + "..."
              : title
          
          }</h3>
          <p className="video__channel">{channel}</p>
        </div>
      </div>
  )}

export default Video