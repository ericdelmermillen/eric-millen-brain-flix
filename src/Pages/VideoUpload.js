import Button from "../components/Button/Button";
import publishIcon from "../assets/images/Icons/publish.svg";


function VideoUpload({ defaultVideo}) {

  return (
    <>
    <h1>Yo from VideoUpload</h1>

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
      // to={"/upload"}
      to={"/"}
      // Currently links back to Home: need to check intended funcionality
    />

    </>
  )
}

export default VideoUpload;