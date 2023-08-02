import "./Header.scss";

import avatar from "../../assets/images/Images/Mohan-muruge.jpg";
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/images/Icons/upload.svg";
import searchIcon from "../../assets/images/Icons/search.svg";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Search from "../Search/Search";

import { Link } from 'react-router-dom';

function Header( { defaultVideo } ) {

  const searchIconStyle = {
  backgroundImage: `url(${searchIcon})`,
  backgroundPosition: "5px center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "20px",
  paddingLeft: "30px",
};

  return (

    <div className="header__container">
      
      <Link 
      // to={`${defaultVideo.id}`}
        className="header__link" 
      >

        <img className="header__logo" src={logo} alt="BrainFlix Logo"/>
      </Link>

      <Search searchIconStyle={searchIconStyle} searchId={"search"} labelText={"Video Search"} placeholder="Search"/>

      <Avatar avatar={avatar} ariaDescription={"profile icon for Mohan"}/>

      <Button 
        buttonText="UPLOAD" 
        iconAlt="upload icon" 
        iconSource={uploadIcon} 
        to={"/upload"}
        />
      
    </div>
  )};

export default Header;
