import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeShelfButton from './ChangeShelfButton'

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    image: 'http://www.hkbookcity.com/image_book/9889755785.jpg'
  }

  componentDidMount = () => {
    if (this.props.book.imageLinks === undefined) {
      return
    } else {
      this.setState(() => ({
        image: this.props.book.imageLinks.thumbnail
      }))
    }
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.state.image}")` }}></div>
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
