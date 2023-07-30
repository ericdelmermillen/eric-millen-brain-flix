import "./Button.scss"

function Button ({buttonText, btnType, iconAlt, iconSource}) {
  return (
    <button className="btn" type={btnType}>
      {iconSource && <img className="btn__icon" src={iconSource} alt={iconAlt} />}
     <span className="btn__text">{buttonText}</span>
    </button>
  )}

export default Button;