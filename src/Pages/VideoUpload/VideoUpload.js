import "./VideoUpload.scss";

import { useEffect, useState } from "react";

import uploadVideoPreview from "../../assets/images/Images/Upload-video-preview.jpg";
import homeIcon from "../../assets/images/Icons/home.svg";
import publishIcon from "../../assets/images/Icons/publish.svg";

import Button from "../../components/Button/Button";


function VideoUpload() {

    const [titleData, setTitleData] = useState("");
    const [descriptionData, setDescriptionData] = useState("");

    const [titleisInvalid, setTitleisInvalid] = useState(false);
    const [descriptionIsInvalid, setDescriptionIsInvalid] = useState(false);
    
    const [hasPublished, setHasPublished] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault()
      
      setTitleisInvalid(titleData.length < 10);
      setDescriptionIsInvalid(descriptionData.length < 10);

      titleData.length >= 10 && descriptionData.length >= 10 
        ? setHasPublished(true)
        : console.log("< 10")
    }

    useEffect(() => {
      if (hasPublished) {
        window.scrollTo(0, 0);
      }
    }, [hasPublished]);

  return (

    <section className="upload">
      <h1 className="upload__heading">Upload Video</h1>

      <div className="upload__content-container">

        <div className="upload__image-container">
          <p className="upload__sub-heading">VIDEO THUMBNAIL</p>
          <img className="upload__image"
            src={uploadVideoPreview}
            alt="thumbnail of the video you're uploading"
          />
        </div>

        <form id="uploadForm" className="upload__form" onSubmit={(e) => handleSubmit(e)}>

          <div className="upload__form-inner">

            <label className="upload__title-label" htmlFor="uploadTitle">
              TITLE YOUR VIDEO 
              {titleisInvalid &&
                <span className="not-valid">Too Short</span>
              }
            </label>

            <input 
              id="uploadTitle" 
              name="uploadTitle" 
              className={titleisInvalid
                ? "upload__title-input invalid" 
                : "upload__title-input"}

              type="text" 
              placeholder="Add a title to your video" 
              value={titleData}
              onChange={(e) => setTitleData(e.target.value)}
            />

            <label className="upload__description-label" htmlFor="uploadDescription">
              ADD A VIDEO DESCRIPTION 
              {descriptionIsInvalid &&
                <span className="not-valid">Too Short</span>
              }
            </label>

            <textarea 
              className={descriptionIsInvalid
                ? "upload__description-input invalid" 
                : "upload__description-input"
              }
              id="uploadDescription" 
              name="uploadDescription" 
              placeholder="Add a description to your video" 
              value={descriptionData}
              onChange={(e) => setDescriptionData(e.target.value)}
            />
          </div>

        </form>
      </div>
      <div className="upload__button-container">

        <Button
          buttonText="PUBLISH"
          iconSource={publishIcon}
          iconAlt="publish icon"
          onClick={handleSubmit}
          to={"/"}
        />

        <Button
          buttonText="CANCEL"
          to={"/"}
          color="#0095FF"
          backgroundColor="#fff"
        />
      </div>

      {hasPublished && (
        <div className="upload__success-message">
          <h3>Your video has been published successfully!</h3>
          <Button
          buttonText="OK"
          iconSource={homeIcon}
          iconAlt="home icon"
          to={"/"}
        />
        </div>
      )}
    </section>
  )};

export default VideoUpload;