import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const categories = ['History', 'Science', 'Sci-fi', 'Terror', 'Philosophy']

class App extends Component {
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

              <h2>Add a book!</h2>

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
              <div className="button-add-book">
                <Button variant="fab" color="primary" aria-label="add">
                  <AddIcon />
                </Button>
              </div>
            </div>




            <div className="add-category">
              <h2>Add a book!</h2>

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
              <div className="button-add-book">
                <Button variant="fab" color="primary" aria-label="add">
                  <AddIcon />
                </Button>
              </div>
            </div>
          </div>



          <div className="content-area">
          </div>
        </main>
      </div>
    );
  }
}

export default App;
