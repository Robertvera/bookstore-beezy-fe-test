import React, { Component } from 'react';
import './App.css';
import { Route, HashRouter, Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Book from 'material-ui-icons/Book';
import ContentPaste from 'material-ui-icons/ContentPaste';
import BooksTable from './Components/BooksTable/BooksTable'
import Categories from './Components/Categories/Categories'
import AddBook from './Components/AddBook/AddBook'
import AddCategory from './Components/AddCategory/AddCategory'
import Or from './Components/OrAdd/OrAdd'
import bookstore from './Function'
import SimpleModal from './Components/ModalEdit/ModalEdit'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0,
      library: [],
      categories: [],
      editVisible: false,
      editBookId: ''
    }
  }


  componentDidMount = () => {
    bookstore.listBooks()
      .then((library) => { this.setState({ library }) })
      .then(() => {
        bookstore.listCategories()
          .then((categories) => { this.setState({ categories }) })
      })
  }

  handleChange = (event, selectedTab) => {
    this.setState({ selectedTab });
  };

  updateLibrary = () => {
    bookstore.listBooks()
      .then(library => {
        this.setState({ library })
      })
      .then(() => {
        this.updateCategories()
      })
  }

  updateCategories = () => {
    bookstore.listCategories()
      .then(categories => {
        let _categories = []
        categories.map(category => {
          return bookstore.getBooksByCategory(category.name)
            .then(filteredBooks => {
              let name = category.name
              let bookCount = filteredBooks.length
              _categories.push({ name, bookCount })
            })
            .then(() => this.setState({ categories: _categories }))

        })
      })
  }

  showBooksByCategory = (category) => {
    bookstore.getBooksByCategory(category)
      .then(filteredBooks =>
        this.setState({
          library: filteredBooks,
          selectedTab: 0
        }))
  }

  deleteBook = (id) => {
    bookstore.deleteBook(id)
      .then(() => {
        this.updateLibrary()
        this.updateCategories()
      })
  }

  openEditModal = (id) => {
    this.setState(
      {
        editVisible: true,
        editBookId: id
      }
    )
  }

  closeEditModal = () => {
    this.updateLibrary()
    this.updateCategories()
    this.setState(
      { editVisible: false }
    )
  }

  


  render() {

    const classes = {
      tabLink: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }


    return (
      <div className="App">

        <AppBar className='top-bar'>
          <Toolbar>
            <h1 className='logo'><span role='img' aria-label='book'>📗</span> Bookstore</h1>
          </Toolbar>
        </AppBar>

        <main className="container">

          <div className="adding-area">

            <AddBook
              onCreateNewBook={this.updateLibrary}
              categories={this.state.categories}
            />
            <Or />
            <AddCategory
              onCreateNewCategory={this.updateCategories}
            />

          </div>

          <HashRouter>

            <div className="content-area">



              <Tabs
                className="tabs-menu"
                fullWidth
                value={this.state.selectedTab}
                onChange={this.handleChange}
                indicatorColor="secondary"
                textColor="secondary"
              >
                <Tab icon={<Book />}
                  label="BOOKS"
                  className={classes.tabLink}
                  component={Link}
                  to='/' />}

            />
                <Tab icon={<ContentPaste />}
                  label="CATEGORIES"
                  className={classes.tabLink}
                  component={Link}
                  to='/categories' />}

            />
              </Tabs>



              <Route exact path="/" render={() => (
                <BooksTable
                  className="table"
                  library={this.state.library}
                  onClickDelete={this.deleteBook}
                  onClickEdit={this.openEditModal}
                />
              )} />


              <Route exact path="/categories" render={() => (
                <Categories
                  categories={this.state.categories}
                  onClickChip={this.showBooksByCategory}
                />
              )} />


            </div>
          </HashRouter>

          <SimpleModal
          visible={this.state.editVisible}
          onClose={this.closeEditModal}
          bookId = {this.state.editBookId}
          />
        </main>
      </div>
    );
  }
}

export default App;