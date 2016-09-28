// npm modules
import React from 'react';

// components
import DeleteButton from '~/buttons/delete-button';
import FormGroup from '~/forms/form-group';
import TextArea from '~/fields/text-area';

class TaskListItemDetails extends React.Component {

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

                <DeleteButton handleClick={this.props.handleDeleteClick} />
            </div>
        );
    }
}

TaskListItemDetails.propTypes = {
    taskNotes: React.PropTypes.string,
    handleDeleteClick: React.PropTypes.func.isRequired,
    handleNotesSave: React.PropTypes.func.isRequired
};

TaskListItemDetails.defaultProps = {
    taskNotes: ''
};

export default TaskListItemDetails;
