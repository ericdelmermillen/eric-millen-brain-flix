import "./Button.scss";
import { Link } from 'react-router-dom';

function Button({ backgroundColor, buttonText, btnType, color, iconAlt, iconSource, onClick, to }) {

  const buttonStyle = {
    backgroundColor: backgroundColor || "",
    color: color || "",
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      className="btn"
      to={to}
      type={btnType}
      style={buttonStyle}
      onClick={handleClick}
    >

      {iconSource && <img className="btn__icon" src={iconSource} alt={iconAlt} />}

      <span 
        className="btn__text" 
        style={{ color: color }}
      > 
        {buttonText}
      </span>

    </Link>
  )};

export default Button;
