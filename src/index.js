import _ from 'lodash';
import React, { Component } from 'react'; // CREATES AND MANAGES COMPONENTS
import ReactDOM from 'react-dom'; // INTERACTS WITH ACTUAL DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // IMPORT COMPONENT SEARCH BAR
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyCxefBqXc5BPYkf9tsfYzaP1yEZCyJ3Lr0";


// Create new component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     }; // array since it will contain a list of videos (i.e. objects)

     this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


// Put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
