import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Search from './Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
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
    if (query === '') {
      this.fetchBooks()
    } else {
      BooksAPI.search(query).then((result) => {
        if (result) {
          this.setState(() => ({
            books: result
          })) 
        }
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} changeShelf={this.changeShelf}/>
        )} />
        <Route path='/search' render={() =>(
          <Search books={this.state.books} performSearch={this.performSearch}/>
        )} />
    </div>
    ) 
  }
}

export default BooksApp
