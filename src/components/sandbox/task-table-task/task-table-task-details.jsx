// npm modules
import React from 'react';

// components
import DeleteButton from '~/buttons/delete-button';
import FormGroup from '~/forms/form-group';
import TextArea from '~/fields/text-area';

// styles
require('./task-table-task-details.scss');

class TaskTableTaskDetails extends React.Component {

    render() {
        return (
            <div className="task-table-task-details">
                <FormGroup>
                    <label>Notes</label>
                    <TextArea
                        value={this.props.taskNotes}
                        onBlur={this.props.handleNotesSave}
                    />
                </FormGroup>

                <DeleteButton handleClick={this.props.handleDeleteClick} />
            </div>
        );
    }
}

TaskTableTaskDetails.propTypes = {
    taskNotes: React.PropTypes.string,

    handleDeleteClick: React.PropTypes.func.isRequired,
    handleNotesSave: React.PropTypes.func.isRequired
};

TaskTableTaskDetails.defaultProps = {
    taskNotes: ''
};

export default TaskTableTaskDetails;
