import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './components/Bookshelf';
import { Link } from 'react-router-dom';

class Search extends Component {
  static PropTypes = {
    books: PropTypes.array,
    changeShelf: PropTypes.func.isRequired,
    performSearch: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.props.performSearch(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <Bookshelf books={this.props.books} 
                title="Search Results"
                changeShelf={this.props.changeShelf} />
        </div>
      </div>
    )
  }
}

export default Search
