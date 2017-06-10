import React, { Component } from 'react'; // IMPORTS REACT AND ALSO PULLS OF COMPONENT FROM REACT

// const SearchBar = () => {
//   return <input />; // FUNCTIONAL COMPONENT
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} placeholder="search for a vid!"
        />
      </div>
    );
  }

  // onInputChange(event) {
  //
  //   this.setState({ term: event.target.value })
  //
  // }
}



export default SearchBar;
