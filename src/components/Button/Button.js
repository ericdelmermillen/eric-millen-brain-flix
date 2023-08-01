import "./Button.scss";
import { Link } from 'react-router-dom';

function Button ({buttonText, btnType, iconAlt, iconSource, to}) {
  return (

    <Link to={to} className="btn" type={btnType}>
      {iconSource && <img className="btn__icon" src={iconSource} alt={iconAlt} />}
      <span className="btn__text">{buttonText}</span>
    </Link>
  )};

export default Button;