import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import bookstore from '../../Function';
import Done from 'material-ui-icons/Done';
import MenuItem from 'material-ui/Menu/MenuItem';
import './ModalEdit.css'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class SimpleModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            book: '',
            categories: []
        }
    }

    componentDidMount = () => {
        bookstore.listCategories()
        .then((categories)=> {
            this.setState({ categories })
        })
    }

    componentWillReceiveProps = (nextProps) => {
        const { bookId } = nextProps
        bookstore.getOneBook(bookId)
            .then((book) => this.setState({ book }))
    }

    handleClose = () => {
        this.props.onClose()
    };

    handleChange = (e) => {
        let { name, value } = e.target;
        let book = { ...this.state.book };
        book[name] = value;
        this.setState({ book });
    }

    render() {
        const { classes } = this.props;
        const { book, categories } = this.state
        return (
            <div>
            {book? 
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.visible}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            Edit {book.title}
                        </Typography>                        
                        <div className="edit-book">
                        <TextField
                            className="input-book-name"
                            label="Title"
                            margin="normal"
                            name="title"
                            defaultValue={book.title}
                            onChange={this.handleChange}
                        />

                        <TextField
                            className="input-book-category"
                            select
                            label="Category"
                            name="category"
                            value={book ? book.category : ''}
                            margin="normal"
                            onChange={this.handleChange}
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
                            defaultValue={book.price}
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <div className="button-add">
                            <Button
                                variant="fab"
                                color="red"
                                aria-label="add"
                                onClick={this.editBook}
                            >
                                <Done />
                            </Button>
                        </div>
                        </div>
                    </div>
                </Modal>
                :undefined}
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(SimpleModal);

// export default SimpleModalWrapped;
export default withStyles(styles)(SimpleModal);