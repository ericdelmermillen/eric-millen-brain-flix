import "./NextVideos.scss";

import Video from "../Video/Video";

function NextVideos({videos, updateCurrentVideo, currentVideoId}) {

  // console.log(currentVideoId)
  // console.log(updateCurrentVideo)

  return (
    <section className="next-videos">
      <h2 className="next-videos__heading">NEXT VIDEOS</h2>
      
      {videos
        .filter(video => video.id !== currentVideoId)
        .map((video) => (
            <Video 
              key={video.id} 
              video={video} 
              updateCurrentVideo= {updateCurrentVideo}
              currentVideoId= {currentVideoId}
            />
        ))}

    </section>
  )};

export default NextVideos;