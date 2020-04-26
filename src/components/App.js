import React from "react";
import { Search, List, VideoPlayer } from "../components";
import service from "../apis/service";
import "../scss/style.scss";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await service.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    this.setState({
      videos: response.data.items,
    });
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="main-container">
        <div className="search-container">
          <Search handleFormSubmit={this.handleSubmit} />
        </div>
        <div className="player-container">
          <VideoPlayer video={this.state.selectedVideo} />
        </div>
        <div className="list-container">
          <List
            handleVideoSelect={this.handleVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
{
  /* <div className="">
  <Search handleFormSubmit={this.handleSubmit} />
  <div className="ui grid">
    <div className="ui row">
      <div className="eleven wide column">
        <VideoPlayer video={this.state.selectedVideo} />
      </div>
      <div className="five wide column">
        <List
          handleVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
        />
      </div>
    </div>
  </div>
</div>; */
}
