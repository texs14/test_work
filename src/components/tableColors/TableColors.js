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
import { showPopup } from '../../actions/actions';


const TableColors = ({ rows, showPopup }) => {

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        console.log(draggableId);
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
                                   (rows.length !== 0) ? rows.map((row, i) => {
                                        if(!row.edit) return <Row row={ row } index={i + 1} key={ row.id }/> 
                                        else return <RowEdit row={row} index={i + 1} key={ row.id }/>
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

const mapStateToProps = ({ rows }) => {
    return { rows }
}


const mapDispathToProps = {
    showPopup
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