import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeShelfButton from './ChangeShelfButton'

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <ChangeShelfButton changeShelf={this.props.changeShelf} book={this.props.book} />
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.author}</div>
      </div>
    )
  }
}
 export default Book
