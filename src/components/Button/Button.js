import "./Button.scss"

function Button ({buttonText, iconSource, iconAlt}) {
  return (
    <button className="btn">
      {iconSource && <img className="btn__icon" src={iconSource} alt={iconAlt} />}
     <span className="btn__text">{buttonText}</span>
    </button>
  )
}

export default Button;