import "./VideoUpload.scss"
import UploadVideoPreview from "../../assets/images/Images/Upload-video-preview.jpg"
import Button from "../../components/Button/Button";
import publishIcon from "../../assets/images/Icons/publish.svg";

function VideoUpload() {
  return (

    <section className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <p className="upload__sub-heading">VIDEO THUMBNAIL</p>

      <div className="upload__image-container">
        <img className="upload__image"
          src={UploadVideoPreview} 
          alt="thumbnail of the video you're uploading"
        />
      </div>

      <form id="uploadForm" className="upload__form" method="POST" >

        <div className="upload__form-inner">

          <label className="upload__title-label" htmlFor="uploadTitle">TITLE YOUR VIDEO</label>
          
          <input className="upload__title-input" id="uploadTitle" name="videoTitle" type="text" placeholder="Add a title to your video" />
          

          <label className="upload__description-label" htmlFor="uploadDescription">ADD A VIDEO DESCRIPTION</label>
          
          <textarea className="upload__description-input" id="uploadDescription" name="comment" placeholder="Add a description to your video" />

        </div>

          <Button 
            buttonText="PUBLISH" 
            iconSource={publishIcon} 
            iconAlt="publish icon" 
            to={"/"}
          />

          <Button 
            buttonText="CANCEL" 
            to={"/"}
            color="#0095FF"
            backgroundColor="#fff"
          />

      </form>
    </section>
  )};

export default VideoUpload;