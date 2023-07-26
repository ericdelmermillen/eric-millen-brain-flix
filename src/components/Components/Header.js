import Button from "./Button";
import uploadIcon from "../../assets/images/Icons/upload.svg"
import logo from "../../assets/images/Logo/BrainFlix-logo.svg"
import "./Header.scss"

function Header() {
  return (
    <div className="header__container">
      <img className="header__logo" src={logo} alt="" />
      <input className="header__search" type="text" placeholder="Search"/>
      <Button buttonText="Upload" iconSource={uploadIcon} iconAlt="upload icon"/>
    </div>
  )
}

export default Header
