import "./Button.scss";
import { Link } from 'react-router-dom';

function Button({ buttonText, btnType, iconAlt, iconSource, to, backgroundColor, color }) {


  const buttonStyle = {
    backgroundColor: backgroundColor || "",
    color: color || "",
  };

  return (
    <Link
      className="btn"
      to={to}
      type={btnType}
      style={buttonStyle}
    >

      {iconSource && <img className="btn__icon" src={iconSource} alt={iconAlt} />}

      <span 
        className="btn__text" 
        style={{ color: color }}
      > 
        {buttonText}
      </span>

    </Link>
  );
}

export default Button;
