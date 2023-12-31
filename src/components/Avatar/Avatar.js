import "./Avatar.scss";
import userPlaceholderImg from "../../assets/images/Images/user-placeholder.png";

function Avatar({avatarImg, ariaDescription}) {

  const defaultAvatarDescription = "user avatar";

  const divStyle = {
    backgroundImage: `url(${avatarImg || userPlaceholderImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };
  
  return (
      <div className="avatar" style={divStyle} aria-describedby="avatar-description">
        <span id="avatar-description" style={{ display: 'none' }}>
          {ariaDescription || defaultAvatarDescription}
        </span>
      </div>
  )};

export default Avatar;
