import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormAdd from '../formAdd/FormAdd';


import { 
    Button,
    Modal
} from 'react-bootstrap';


const ShowAddPopup = ({ showAddPopup }) => {

    return(
        <Modal
            show={showAddPopup}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                Add color
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormAdd/>
            </Modal.Body>
        </Modal>
    )
}
const mapStateToProps = ({ showAddPopup }) => {
    return {
        showAddPopup
    }
}


export default connect(mapStateToProps, null)(ShowAddPopup);