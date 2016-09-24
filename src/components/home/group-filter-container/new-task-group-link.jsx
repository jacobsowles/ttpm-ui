// npm modules
import React from 'react';

// components
import ViewEditToggleField from '../../fields/view-edit-toggle-field/view-edit-toggle-field.jsx';

class NewTaskGroupLink extends React.Component {

    render() {
        return (
            <ViewEditToggleField
                type='task-group'
                text='Add a new task group'
                clearTextOnClick={true}
                resetToOriginalOnSubmit={true}
                handleSubmit={this.props.handleSubmit}
            />
        );
    }
}

NewTaskGroupLink.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
};

export default NewTaskGroupLink;
