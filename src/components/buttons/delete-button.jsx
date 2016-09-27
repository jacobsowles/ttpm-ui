import React from 'react';
import Button from './button.jsx';

class DeleteButton extends React.Component {

    render() {
        return (
            <Button
                className="btn btn-danger"
                {...this.props}
            />
        );
    }
}

DeleteButton.PropTypes = {
    text: React.PropTypes.string,
    handleClick: React.PropTypes.func.isRequired
};

DeleteButton.defaultProps = {
    text: 'Delete'
};

export default DeleteButton;
