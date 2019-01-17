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
    console.log(query)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} changeShelf={this.changeShelf}/>
        )} />
        <Route path='/search' render={() =>(
          <Search performSearch={this.performSearch}/>
        )} />
    </div>
    ) 
  }
}

export default BooksApp
