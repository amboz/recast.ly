var VideoList = (props) => {
  let handleVideoClick = props.handleVideoClick;
  return (
    <div className="video-list">
      {
        props.videos.map((video, i) => {
          return (
            <VideoListEntry video={video} key={i} handleVideoClick={handleVideoClick}/>
          );
        })
      }
    </div>
    
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.function.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
