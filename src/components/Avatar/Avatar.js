import "./Avatar.scss";
import userPlaceholderImg from "../../assets/images/Images/user-placeholder.png";

function Avatar({avatar}) {
  const divStyle = {
    backgroundImage: `url(${avatar || userPlaceholderImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  return (
      <div className="avatar" style={divStyle}></div>
  )
}

export default Avatar;
