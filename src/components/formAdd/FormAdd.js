import React from 'react';
import { connect } from 'react-redux';
import { popupToggle, addColor } from '../../actions/actions';
import { Form, Col, Button } from 'react-bootstrap';
import { XSquare, CheckSquare } from 'react-bootstrap-icons';
import { v4 } from 'uuid';
import hexToRgb from '../../functions/hexToRgb';


const FormAdd = ({ addColor, popupToggle }) => {
    let _name, _type, _color, _id;

    _id = v4();

    return(
        <Form.Group>
            <Form.Row>
                <Form.Label column lg={2}>
                    Name
                </Form.Label>
                <Col>
                    <Form.Control ref={ input => _name = input} type="text" placeholder="Normal text"/>
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Form.Label column lg={2}>
                    Type
                </Form.Label>
                <Col>
                    <Form.Control ref={ input => _type = input} type="text" placeholder="Normal text"/>
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Form.Label column lg={2}>
                    Color
                </Form.Label>
                <Col>
                    <Form.Control ref={ input => _color = input} type="color" placeholder="Normal text" />
                </Col>
            </Form.Row>
            <Form.Row className="button-form-row">
                <Button variant="primary" onClick={ () => {
                    popupToggle();
                    addColor(
                    {
                        name: _name.value,
                        color: {
                            hex: _color.value,
                            rgb: hexToRgb(_color.value)
                        },
                        type: _type.value,
                        id: _id,
                        edit: false
                    }, _id);
                }} > <CheckSquare size={22}/></Button>
                <Button variant="danger" onClick={ () => popupToggle() }> <XSquare size={22}/></Button>
            </Form.Row>
        </Form.Group>
    )
}
const mapDispathToProps = {
    addColor,
    popupToggle
}

export default connect(null, mapDispathToProps)(FormAdd);