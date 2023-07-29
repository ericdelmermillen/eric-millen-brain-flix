import "./Header.scss"
import uploadIcon from "../../assets/images/Icons/upload.svg"
import logo from "../../assets/images/Logo/BrainFlix-logo.svg"
import searchIcon from "../../assets/images/Icons/search.svg"
import avatar from "../../assets/images/Images/Mohan-muruge.jpg"

import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

function Header() {
  const searchIconStyle = {
  backgroundImage: `url(${searchIcon})`,
  backgroundPosition: "5px center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "20px",
  paddingLeft: "30px",
};
  
  return (
    <div className="header__container">
      <img className="header__logo" src={logo} alt="BrainFlix Logo"/>

      <Search searchIconStyle={searchIconStyle} placeholder="Search"/>

      <Avatar avatar={avatar}/>

      <Button buttonText="UPLOAD" iconSource={uploadIcon} iconAlt="upload icon"/>
      
    </div>
  )}

export default Header
