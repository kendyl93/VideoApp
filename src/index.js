import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_Key = 'AIzaSyDRUDzbS9SCNUJESXebhfkFNblmpMjGbTQ';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_Key, term: 'surfboards'}, (videos) => {
      this.SetState = { videos };
      console.log(videos.length);
    });
  }

  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  };
};

// Take the component and put it on the page(html) in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
