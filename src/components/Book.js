import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeShelfButton from './ChangeShelfButton'

class Book extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.cover}")` }}></div>
          <div className="book-shelf-changer">
            <ChangeShelfButton changeShelf={this.props.changeShelf} />
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    )
  }
}
 export default Book
