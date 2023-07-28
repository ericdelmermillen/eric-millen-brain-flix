import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Search from "../Search/Search";
import uploadIcon from "../../assets/images/Icons/upload.svg"
import logo from "../../assets/images/Logo/BrainFlix-logo.svg"
import searchIcon from "../../assets/images/Icons/search.svg"
import avatar from "../../assets/images/Images/Mohan-muruge.jpg"
import "./Header.scss"

function Header() {
  const searchIconStyle = {
  backgroundImage: `url(${searchIcon})`,
  backgroundPosition: "5px center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "20px",
  paddingLeft: "30px",
  width: `calc(100% - 50px)`
};
  
  return (
    <div className="header__container">
      <img className="header__logo" src={logo} alt="" />
      <Search searchIconStyle={searchIconStyle} placeholder="Search"/>
      <Avatar avatar={avatar}/>
      <Button buttonText="UPLOAD" iconSource={uploadIcon} iconAlt="upload icon"/>
    </div>
  )
}

export default Header
