import React, { Component } from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Tabs, { Tab } from 'material-ui/Tabs';
import Book from 'material-ui-icons/Book';
import ContentPaste from 'material-ui-icons/ContentPaste';
import BooksTable from './Components/BooksTable/BooksTable'
import Categories from './Components/Categories/Categories'


const categories = ['History', 'Science', 'Sci-fi', 'Terror', 'Philosophy']

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0
    }
  }

  handleChange = (event, selectedTab) => {
    this.setState({ selectedTab });
  };


  render() {
    return (
      <div className="App">
        <AppBar className='top-bar'>
          <Toolbar>
            <h1 className='logo'><span role='img' aria-label='book'>📗</span> Bookstore</h1>
          </Toolbar>
        </AppBar>
        <main className="container">
          <div className="adding-area">



            <div className="add-book">

              <h2>Add a book</h2>

              <TextField
                className="input-book-name"
                label="Name"
                margin="normal"
              />

              <TextField
                className="input-book-category"
                select
                label="Category"
                value=''
                margin="normal"
              >
                {categories.map(category => {
                  return <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                })}
              </TextField>

              <TextField
                className="input-book-price"
                label="Price"
                type="number"
                margin="normal"
              />
              <div className="button-add">
                <Button variant="fab" color="primary" aria-label="add">
                  <AddIcon />
                </Button>
              </div>
            </div>

            <div className="adding-link">
              <h1>or...</h1>
            </div>

            <div className="add-category">
              <h2>Add a Category</h2>

              <TextField
                className="input-category"
                label="Name"
                margin="normal"
              />


              <div className="button-add">
                <Button variant="fab" color="primary" aria-label="add">
                  <AddIcon />
                </Button>
              </div>
            </div>
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
                <Tab icon={<Book />} label="BOOKS" />
                <Tab icon={<ContentPaste />} label="CATEGORIES" />
              </Tabs>


              <Route exact path="/" render={() => (
                <BooksTable className="table" />
              )} />


              <Route exact path="/categories" render={() => (
                <Categories />
              )} />


            </div>
          </HashRouter>





        </main>
      </div>
    );
  }
}

export default App;
