import "./Header.scss";
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/images/Icons/upload.svg";
import searchIcon from "../../assets/images/Icons/search.svg";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Search from "../Search/Search";

import { Link } from 'react-router-dom';
const BASE_URL = "http://localhost:8080/";

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
      
      <Link to={"/"} className="header__link">
        <img className="header__logo" src={logo} alt="BrainFlix Logo"/>
      </Link>

      <Search searchIconStyle={searchIconStyle} searchId={"search"} labelText={"Video Search"} placeholder="Search"/>

      <Avatar 
        // avatarImg={avatarImg} 
        avatarImg={`${BASE_URL}images/Mohan-muruge.jpg`} 
        ariaDescription={"profile icon for Mohan"}
      />

      <Button 
        buttonText="UPLOAD" 
        iconAlt="upload icon" 
        iconSource={uploadIcon} 
        to={"/upload"}
        />
    </div>
  )};

export default Header;
