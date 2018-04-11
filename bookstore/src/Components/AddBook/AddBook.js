import React, { Component } from 'react';
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import MenuItem from 'material-ui/Menu/MenuItem';
import bookstore from '../../Function'
import './AddBook.css'

class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: '',
            categories: []
        }
    }
    
    // componentDidMount = () => {
    //     bookstore.listCategories()
    //     .then((categories)=> {
    //         this.setState({categories})
    //     })
    // }
    
      newBook = (title, genre, price) => {
        bookstore.createBook(this.state.book.title, this.state.book.category, this.state.book.price )
        .then(()=> {
            this.setState({
                book:''
            })
        })
        this.props.onCreateNewBook()
      }

      handleChange = (e) => {
        let { name, value } = e.target;
        let book = { ...this.state.book };
        book[name] = value;
        this.setState({ book });
    }

        

    render() {

        const { category } = this.state.book
        const { categories } = this.props

        return (
            <div className="add-book">

                <h2>Add a book</h2>

                <TextField
                    className="input-book-name"
                    label="Title"
                    margin="normal"
                    name="title"
                    onChange = {this.handleChange}                    
                />

                <TextField
                    className="input-book-category"
                    select
                    label="Category"
                    name="category"
                    value={category ? category : ''}
                    margin="normal"
                    onChange = {this.handleChange}
                >
                    {categories.map(category => {
                        return <MenuItem key={category.name} value={category.name}>
                            {category.name}
                        </MenuItem>
                    })}
                </TextField>

                <TextField
                    className="input-book-price"
                    label="Price"
                    type="number"
                    name="price"
                    margin="normal"
                    onChange = {this.handleChange}
                />
                <div className="button-add">
                    <Button
                        variant="fab"
                        color="primary"
                        aria-label="add"
                        onClick={this.newBook}
                    >
                        <AddIcon />
                    </Button>
                </div>
            </div>
        )
    }



}

export default AddBook;