import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    showSearchPage: true,
    books: []
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  changeShelf = (book, target) => {
    BooksAPI.update(book, target).then(() => {
      this.fetchBooks()
    })
  }

  performSearch = (query) => {
    console.log(query)
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? 
        ( <Search performSearch={this.performSearch} />) : 
        ( <ListBooks books={this.state.books} changeShelf={this.changeShelf} /> ) }
    </div>
    ) 
  }
}

export default BooksApp
