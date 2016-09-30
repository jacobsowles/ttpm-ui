// npm modules
import React, { Component, PropTypes } from 'react';

// components
import DeleteButton from '~/buttons/delete-button';
import FormGroup from '~/forms/form-group';
import TextArea from '~/fields/text-area/text-area';

class TaskListItemDetails extends Component {

    render() {
        return (
            <div className="task-details">
                <FormGroup>
                    <label>Notes</label>
                    <TextArea
                        value={this.props.taskNotes}
                        handleBlur={this.props.handleNotesSave}
                    />
                </FormGroup>

                <DeleteButton
                    value={this.props.taskId}
                    handleClick={this.props.handleTaskDelete}
                />
            </div>
        );
    }
}

TaskListItemDetails.propTypes = {
    taskId: PropTypes.number.isRequired,
    taskNotes: PropTypes.string,
    handleTaskDelete: PropTypes.func.isRequired,
    handleNotesSave: PropTypes.func.isRequired
};

TaskListItemDetails.defaultProps = {
    taskNotes: ''
};

export default TaskListItemDetails;
