import React from 'react'; // CREATES AND MANAGES COMPONENTS
import ReactDOM from 'react-dom'; // INTERACTS WITH ACTUAL DOM

import SearchBar from './components/search_bar'; // IMPORT COMPONENT SEARCH BAR

const API_KEY = "keyhere";

// Create new component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

// Put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
