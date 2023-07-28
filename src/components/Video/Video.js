import "./Video.scss"

function Video({video}) {
  const {title, channel, image, id} = video

  return (
      <div className="video" onClick={() => console.log(id)}>
        <img className="video__thumbnail" src={image} alt="" />
        <div className="video__text">
          <h3 className="video__title">{title}</h3>
          <p className="video__channel">{channel}</p>
        </div>
      </div>
  )
}

export default Video