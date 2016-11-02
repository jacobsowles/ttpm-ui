import React, { Component, PropTypes } from 'react';
import ReactModal from 'react-modal';

require('./modal.scss');

class Modal extends Component {
    render() {
        return (
            <ReactModal
                className="tt-modal-content animated zoomIn"
                overlayClassName="tt-modal-overlay"
                isOpen={this.props.isOpen}
                onRequestClose={this.props.handleClose}
            >
                    {this.props.children}
            </ReactModal>
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default Modal;
