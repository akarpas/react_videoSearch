import React, { Component } from 'react'; // CREATES AND MANAGES COMPONENTS
import ReactDOM from 'react-dom'; // INTERACTS WITH ACTUAL DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // IMPORT COMPONENT SEARCH BAR
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "keyhere";

// Create new component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }; // array since it will contain a list of videos (i.e. objects)

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


// Put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
