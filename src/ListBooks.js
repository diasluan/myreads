import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './components/Bookshelf'

class ListBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

    render() {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf books={this.props.books.filter((book) => book.shelf === "currentlyReading")} 
                title="Currently Reading"
                changeShelf={this.props.changeShelf} />
              <Bookshelf books={this.props.books.filter((book) => book.shelf === "wantToRead")} 
                title="Want to Read"
                changeShelf={this.props.changeShelf} />
              <Bookshelf books={this.props.books.filter((book) => book.shelf === "read")} 
                title="Read"
                changeShelf={this.props.changeShelf} />
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </div>
        </div>
    )
  }
}

export default ListBooks