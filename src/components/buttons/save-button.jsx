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

SaveButton.defaultProps = {
    text: 'Save'
};

export default SaveButton;
