import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteRow, editToggle } from '../../actions/actions';


const Row = ( {row, index, deleteRow, editToggle}  ) => {
    const { name, type, color, id } = row;

    return (
        <Draggable draggableId={id} index={index}>
            {
                (provided) => (
                    <tr 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <th>{ index }</th>
                        <th>{ name }</th>
                        <th>{ type }</th>
                        <th>{ color }</th>
                        <th>
                            <Button variant="info" onClick={() => editToggle(id)}> Edit </Button>
                            <Button variant="danger" onClick={() => deleteRow(id)}> Del </Button>
                        </th> 
                    </tr>
                )
            }
        </Draggable>
    )
}

const mapDispathToProps = {
    deleteRow,
    editToggle
}

export default connect(null, mapDispathToProps)(Row);