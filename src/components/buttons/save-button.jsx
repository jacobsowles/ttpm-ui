import React from 'react';
import Button from './button.jsx';

class SaveButton extends React.Component {

    render() {
        return (
            <Button
                className="btn btn-success"
                {...this.props}
            />
        );
    }
}

SaveButton.PropTypes = {
    text: React.PropTypes.string,
    handleClick: React.PropTypes.func.isRequired
};

SaveButton.defaultProps = {
    text: 'Save'
};

export default SaveButton;
