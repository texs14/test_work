import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { Button } from 'react-bootstrap';
import { XSquare, CheckSquare } from 'react-bootstrap-icons';
import { editToggle, saveEdit } from '../../actions/actions';
import hexToRgb from '../../functions/hexToRgb';


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
                        <th className="table__cell table__cell_index">{ index }</th>
                        <th className="table__cell table__cell_name">
                            <input className="row-input" type="text" defaultValue={name} ref={ input => _name = input}/>
                        </th>
                        <th className="table__cell table__cell_type">
                            <input className="row-input" type="text" defaultValue={type} ref={ input => _type = input}/>
                        </th>
                        <th className="table__cell table__cell_color input-color-cell">
                            <input className="row-input-color" type="color" defaultValue={color} ref={ input => _color = input}/>
                        </th>
                        <th className="table__cell table__cell_button">
                            <Button variant="info" 
                                onClick={ () => saveEdit(
                                {
                                    name: _name.value,
                                    type: _type.value,
                                    color: {
                                        hex: _color.value,
                                        rgb: hexToRgb(_color.value)
                                    },
                                    id
                                }, id
                                )}> <CheckSquare size={22}/> </Button>
                            <Button variant="warning" onClick={() => editToggle(id)}> <XSquare size={22}/>  </Button>
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