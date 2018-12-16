import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static PropTypes = {
    changeShelf: PropTypes.func.isRequired,
    book: PropTypes.number.isRequired
  }

  render() {
    return (
      <select onChange={(event) => this.props.changeShelf(this.props.book, event.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}
 export default Book
