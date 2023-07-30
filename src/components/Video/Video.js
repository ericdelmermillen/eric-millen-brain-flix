import "./Video.scss"

function Video({video, updateCurrentVideo}) {
  const { channel, id, image, title} = video;

  return (
      <div className="video" onClick={() => updateCurrentVideo(id)}>
        <img className="video__thumbnail" src={image} alt="" />
        <div className="video__text">
          <h4 className="video__title">{
            title.length > 40 
              ? title.slice(0, 33) + "..."
              : title
          }</h4>
          <p className="video__channel">{channel}</p>
        </div>
      </div>
  )}

export default Video