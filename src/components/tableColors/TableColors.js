import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { 
    Button,
    Table
} from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';

import Row from '../row/Row';
import RowEdit from '../row/RowEdit';
import { popupToggle, drop } from '../../actions/actions';


const TableColors = ({ rows, column, popupToggle, drop }) => {
    
    
    let rowsArr = [];

    for (let key of column.rowsIds) {
        rowsArr.push(rows[key]);
    }


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
    }

    return(
    <>
        <h1> Color table for test work</h1>
        <Table striped bordered hover className="table">

            <thead>
                <tr>
                    <th className="table__cell table__cell_index">#</th>
                    <th className="table__cell table__cell_name">Name</th>
                    <th className="table__cell table__cell_type">Type</th>
                    <th className="table__cell table__cell_color">Color</th>
                    <th className="table__cell table__cell_button">
                        <Button variant="success" 
                            onClick={ () => popupToggle() }> <PlusSquare size={22}/> </Button>
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
                                   (rowsArr.length !== 0) ? rowsArr.map((row, i) => {
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
    </>
    )
}

const mapStateToProps = ({ column, rows }) => {
    return { column, rows }
}


const mapDispathToProps = {
    popupToggle,
    drop
}

export default connect(mapStateToProps, mapDispathToProps)(TableColors);