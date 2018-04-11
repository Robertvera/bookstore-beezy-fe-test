import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import './BooksTable.css'
import Delete from 'material-ui-icons/Delete';
import Edit from 'material-ui-icons/Edit';



class BooksTable extends Component {    
    
                
    render(props) {

        const {library} = this.props ? this.props : [];

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

                    {library.map(book=> {
                        return <TableBody key={book.id}>
                        <TableRow>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.category}</TableCell>
                            <TableCell numeric>{book.price} €</TableCell>
                            <TableCell><Edit/><Delete/></TableCell>  
                        </TableRow>
                        </TableBody>
                    })}                    
                </Table>
            </Paper>
        )
    
    }
    



}

export default BooksTable;
