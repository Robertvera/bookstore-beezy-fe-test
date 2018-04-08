import React, { Component } from 'react';
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

    handleClick = () => {
        return alert('hola k ase')
    }

    render() {
        return (
            <div className='categories-container'>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                        </Typography>
                        <Chip
                            avatar={<Avatar>10</Avatar>}
                            label="Books"
                            onClick={this.handleClick}
                        />
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Card className='category-card'>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            benevolent
                    </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </div>

                )
            }
        
        
        
        }
        
export default Categories;