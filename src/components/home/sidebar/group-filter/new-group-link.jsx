import React, { Component, PropTypes } from 'react';
import ViewEditToggleField from '~/fields/view-edit-toggle-field/view-edit-toggle-field';

class NewGroupLink extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.handleSubmit(this.props.taskGroupId, event);
    }

    render() {
        return (
            <ViewEditToggleField
                type='task-group'
                text='+ Add a new group'
                clearTextOnClick={true}
                resetToOriginalOnSubmit={true}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

NewGroupLink.propTypes = {
    taskGroupId: PropTypes.number,
    handleSubmit: PropTypes.func.isRequired
};

NewGroupLink.defaultProps = {
    taskGroupId: null
};

export default NewGroupLink;
