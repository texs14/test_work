import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { 
    Button,
    Table,
    Modal
} from 'react-bootstrap';

import Row from '../row/Row';
import RowEdit from '../row/RowEdit';
import { showPopup, drop } from '../../actions/actions';


const TableColors = ({ rows, column, showPopup, drop }) => {
    
    
    let rowsArr = [];
    let rowsAr = Object.values(rows);
    

    // console.log(column.rowsIds);

    console.log(rowsAr)

    for (let key of column.rowsIds) {
        rowsArr.push(rows[key]);

        console.log(key)
    }

    // rows.filter(i => console.log(i))
    console.log(rowsArr)

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if(!destination) {
            return;
        }

        if(
            destination.draggableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }


        const newRowsIds = rowsArr.map(row => row.id);

        newRowsIds.splice(source.index, 1);
        newRowsIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            rowsIds: newRowsIds
        }

        drop(newColumn);

        console.log(newRowsIds);

        // console.log(source);
        // console.log(column.rowsIds);
    }

    return(
        <Table striped bordered hover>

            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Color</th>
                    <th>

            
                        <Button variant="success" 
                            onClick={ () => showPopup() }> Add </Button>
                    </th>
                </tr>
            </thead>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={'droppavle-1'}>
                    {provided => (
                        <tbody
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                                {
                                   (rowsAr.length !== 0) ? rowsAr.map((row, i) => {
                                        if(!row.edit) return <Row row={ row } index={i} key={ row.id }/> 
                                        else return <RowEdit row={row} index={i} key={ row.id }/>
                                    }) :
                                    <tr>
                                        <th></th>
                                        <th> The list is empty </th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                }
                                {provided.placeholder}
                        </tbody>
                    )}
                    
                </Droppable>
            </DragDropContext>
        </Table>
    )
}

const mapStateToProps = ({ column, rows }) => {
    return { column, rows }
}


const mapDispathToProps = {
    showPopup,
    drop
}

export default connect(mapStateToProps, mapDispathToProps)(TableColors);


// (rows.length !== 0) ? rows.map((row, i) => {
//     if(!row.edit) return <Row row={ row } index={i + 1} key={ row.id }/> 
//     else return <RowEdit row={row} index={i + 1} key={ row.id }/>
// }) :
// <tr>
//     <th></th>
//     <th> The list is empty </th>
//     <th></th>
//     <th></th>
//     <th></th>
// </tr>