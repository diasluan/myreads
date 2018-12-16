import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './components/Bookshelf'

class ListBooks extends Component {
  static PropTypes = {
    bookshelves: PropTypes.array.isRequired,
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
            {this.props.bookshelves.map((bookshelf) => (
              <Bookshelf 
                key={bookshelf.key}
                title={bookshelf.title} 
                books={bookshelf.books} 
                changeShelf={this.props.changeShelf} />
              )
            )}
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