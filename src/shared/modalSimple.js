import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import '../css/modal.css';

export const ModalSimple = ({title, body, show, setShow }) => {

    return (
    <Modal 
        show={ show } 
        onHide={ e => setShow(false) } 
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        animation={false}
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{ title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            { body }
        </Modal.Body>
    </Modal>
    );
  
}

ModalSimple.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
}
  