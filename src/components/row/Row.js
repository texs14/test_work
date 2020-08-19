import React from 'react';
import { useHistory } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteRow, editToggle } from '../../actions/actions';


const Row = ( {row, index, deleteRow, editToggle}  ) => {
    const { name, type, color, id } = row;

    const colorCell = { 
        background: `${color.hex}`
    }

    console.log(color)

    const history = useHistory();

    return (
        <Draggable draggableId={id} index={index}>
            {
                (provided) => (
                    <tr 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <th className="table__cell table__cell_index">{ index }</th>
                        <th className="table__cell table__cell_name">{ name }</th>
                        <th className="table__cell table__cell_type">{ type }</th>
                <th className="table__cell table__cell_color" style={colorCell}><span>{color.hex}</span></th>
                        <th className="table__cell table__cell_button">
                            <Button variant="primary" onClick={() => history.push({ pathname: `/${id}`})}>
                                Open </Button>
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