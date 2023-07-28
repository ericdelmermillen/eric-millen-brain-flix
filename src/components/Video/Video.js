import "./Video.scss"

function Video({video}) {
  const {title, channel, image} = video;

  return (

      
      <div className="video">
        <img className="video__thumbnail" src={image} alt="" />
        <div className="video__text">
          <h3 className="video__title">{title}</h3>
          <p className="video__channel">{channel}</p>
        </div>

      </div>
  )
}

export default Video