import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import './BooksTable.css'
import Delete from 'material-ui-icons/Delete';
import Edit from 'material-ui-icons/Edit';

class BooksTable extends Component {
    constructor(props) {
        super(props)
        // this.state = {         
        // }
    }


    render() {
        return (
            <Paper className='table-container'>
                <Table className='table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell numeric>Price</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key='0'>
                            <TableCell>Lord of The Rings</TableCell>
                            <TableCell>Sci-Fi</TableCell>
                            <TableCell numeric>50 €</TableCell>
                            <TableCell><Edit/><Delete/></TableCell>  
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        )
    }



}

export default BooksTable;