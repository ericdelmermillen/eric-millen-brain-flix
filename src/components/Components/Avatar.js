import "./Avatar.scss"

function Avatar({avatar, avatarAlt}) {
  const divStyle = {
    backgroundImage: `url(${avatar})`,
    // backgroundImage: `url(${avatar})` || "../alt-image-source-for-default-image",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  return (
      <div className="avatar" style={divStyle}></div>
  )
}

export default Avatar;