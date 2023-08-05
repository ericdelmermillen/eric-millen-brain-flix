import "./VideoUpload.scss"
import Button from "../../components/Button/Button";
import publishIcon from "../../assets/images/Icons/publish.svg";

function VideoUpload() {

  return (

    <div className="app">
      <div className="app__inner-container">


        <Button 
          buttonText="CANCEL" 
          to={"/"}
          color="#0095FF"
          backgroundColor="#fff"
        />

        <Button 
          buttonText="PUBLISH" 
          iconSource={publishIcon} 
          iconAlt="publish icon" 
          to={"/"}
        />
      </div>
    </div>

  )};

export default VideoUpload;