import "./NotFound.scss";
import homeIcon from "../../assets/images/Icons/home.svg";

import Button from "../Button/Button";

function NotFound() {
  return (

    <div className="not-found">
      <h1>Brain Fart!...</h1>
      <h2>It's not you, it's us...</h2>
      <h2>Page Not Found.</h2>

      <Button 
        buttonText="HOME" 
        className="btn"
        iconAlt="upload icon" 
        iconSource={homeIcon} 
        to={"/"}
        />
    </div>
  )
}

export default NotFound