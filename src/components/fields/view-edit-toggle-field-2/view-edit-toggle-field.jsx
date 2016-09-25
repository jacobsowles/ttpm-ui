// npm modules
import React from 'react';

// styles
require('./view-edit-toggle-field.scss');

class ViewEditToggleField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.text
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className={`${this.props.type}-view-edit-toggle-field`}>
                <p>{this.state.value}</p>
            </div>
        );
    }
}

ViewEditToggleField.propTypes = {
    type: React.PropTypes.string,
    text: React.PropTypes.string,
    clearTextOnClick: React.PropTypes.bool,
    resetToOriginalOnSubmit: React.PropTypes.bool,
    isReadOnly: React.PropTypes.bool,
    includeWithSubmit: React.PropTypes.object,

    handleSubmit: React.PropTypes.func.isRequired
};

ViewEditToggleField.getDefaultProps = {
    text: '',
    clearTextOnClick: false,
    resetToOriginalOnSubmit: false,
    isReadOnly: false
};

export default ViewEditToggleField;
