import "./NextVideos.scss";
import Video from "../Video/Video";

function NextVideos({videos, updateCurrentVideo, currentVideoId}) {

  return (
    <section className="next-videos">
      <h2 className="next-videos__heading">NEXT VIDEOS</h2>
      
      {videos
      .filter(video => video.id !== currentVideoId)
      .map((video) => (
        <Video key={video.id} video={video} updateCurrentVideo=   
          {updateCurrentVideo}
        />
        ))}
      {/* 
      <Video key={Math.floor(Math.random * 100)} video={"./"}/> 
      // Dummy Video for testing default background color
      */}
    </section>
  )}

export default NextVideos