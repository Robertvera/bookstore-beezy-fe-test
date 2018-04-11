import React, { Component } from 'react';
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import bookstore from '../../Function'
import './AddCategory.css'


class AddCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category:''
    }
  }

  handleChange = (e) => {
    let { value } = e.target;    
    this.setState({ category: value });
  }

  createCategory = () => {
    const { category } = this.state
    bookstore.createCategory(category, 0)
    .then(()=> {
      bookstore.listCategories()
      .then(categories=>console.log(categories))
    })

    this.props.onCreateNewCategory()
  }

  render() {
    return (
      <div className="add-category">
        <h2>Add a Category</h2>

        <TextField
          className="input-category"
          label="Name"
          name = "category"
          margin="normal"
          onChange={this.handleChange}
        />


        <div className="button-add">
          <Button
            variant="fab"
            color="primary"
            aria-label="add"
            onClick={this.createCategory}
            >
            <AddIcon />
          </Button>
        </div>
      </div>
    )
  }



}

export default AddCategory;