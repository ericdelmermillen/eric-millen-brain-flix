import Button from "./Button";
import Avatar from "../Components/Avatar";
import uploadIcon from "../../assets/images/Icons/upload.svg"
import logo from "../../assets/images/Logo/BrainFlix-logo.svg"
import avatar from "../../assets/images/Images/Mohan-muruge.jpg"
import "./Header.scss"

function Header() {
  
  return (
    <div className="header__container">
      <img className="header__logo" src={logo} alt="" />
      <input className="header__search" type="text" placeholder="Search"/>
      <Avatar avatar={avatar}/>
      <Button buttonText="Upload" iconSource={uploadIcon} iconAlt="upload icon"/>
    </div>
  )
}

export default Header
