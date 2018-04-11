import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import './Categories.css'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

class Categories extends Component {
    constructor(props) {
        super(props)
        // this.state = {         
        // }
    }

    handleClick = (category) => {        
        this.props.onClickChip(category)
        this.props.history.push("/")
    }

    render() {

        const { categories } = this.props ? this.props : [];

        return (
            <div className='categories-container'>

                {categories.map((category) => {
                    return <Card className='category-card'>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                {category.name}
                            </Typography>
                            <Chip
                                avatar={<Avatar>{category.bookCount === 0 ? '0' : category.bookCount}</Avatar>}
                                label="Books"
                                onClick={(e)=> {e.preventDefault; this.handleClick(category.name)}}
                            />
                        </CardContent>
                        <CardActions>

                        </CardActions>
                    </Card>
                })}

            </div>

        )
    }



}

export default Categories;