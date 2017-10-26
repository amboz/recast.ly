class App extends React.Component {

  constructor(props) {
    super(props);
    //manage state for videoList and videoPlayer
      //set default click state of any
        //App instance/children to be false
      //make a handler for videoListEntry
    this.state = {
      //VPD will pass data to the list (who will then pass to the player)
        //and will update with new data inputs
          //this state value will get updated with fetch requests

      //state that keeps track of videos in video list
        //potentially, input to search will update this state, which will update videolistview
      videoListData: this.props.videos,
      targetVideo: this.props.videos[0]
    };
  }
  //this passes clicked video to the App state
  handleVideoClick(clickedVideo) {
    console.log('clicked!');
    this.setState({targetVideo: clickedVideo});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/*<div><VideoPlayer video={this.props.videos[0]} /></div>*/}
            <div><VideoPlayer video={this.state.targetVideo} /></div>
          </div>
          <div className="col-md-5">
            <div>
              {/*<VideoList videos={this.props.videos} />*/}

              <VideoList videos={this.state.videoListData} handleVideoClick={this.handleVideoClick.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


