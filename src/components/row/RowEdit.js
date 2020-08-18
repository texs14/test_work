import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { Button } from 'react-bootstrap';
import { editToggle, saveEdit } from '../../actions/actions';


const RowEdit = ( {row, editToggle, saveEdit, index} ) => {
    const { name, type, color, id } = row;

    let _name, _type, _color;

    return (
        <Draggable draggableId={id} index={index}>
            {
                (provided) => (
                    <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <th>{ index }</th>
                        <th>
                            <input type="text" defaultValue={name} ref={ input => _name = input}/>
                        </th>
                        <th>
                            <input type="text" defaultValue={type} ref={ input => _type = input}/>
                        </th>
                        <th>
                            <input type="color" defaultValue={color} ref={ input => _color = input}/>
                        </th>
                        <th>
                            <Button variant="info" 
                                onClick={ () => saveEdit({
                                    name: _name.value,
                                    type: _type.value,
                                    color: _color.value,
                                    id
                                })}> Save </Button>
                            <Button variant="warning" onClick={() => editToggle(id)}> Close </Button>
                        </th> 
                    </tr>
                )
            }
        </Draggable>
    )
}

const mapDispathToProps = {
    editToggle,
    saveEdit
}

export default connect(null, mapDispathToProps)(RowEdit);