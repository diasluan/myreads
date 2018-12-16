import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

class Bookshelf extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book 
                  id={book.id}
                  title={book.title} 
                  author={book.author} 
                  cover={book.cover} 
                  changeShelf={this.props.changeShelf} />
              </li>
            ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
