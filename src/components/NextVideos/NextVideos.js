import "./NextVideos.scss";

import Video from "../Video/Video";

function NextVideos({ currentVideoId, videosListData}) {

  return (
    <section className="next-videos">
      <h2 className="next-videos__heading">NEXT VIDEOS</h2>
      
      {videosListData
        .filter(video => video.id !== currentVideoId)
        .map((video) => (
            <Video 
              key={video.id} 
              video={video} 
              currentVideoId= {currentVideoId}
            />
        ))}
    </section>
  )};

export default NextVideos;