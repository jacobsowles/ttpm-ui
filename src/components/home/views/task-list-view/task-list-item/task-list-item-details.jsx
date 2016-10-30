import React, { Component, PropTypes } from 'react';

import DeleteButton from '~/buttons/delete-button';
import FormGroup from '~/forms/form-group';
import Message from '~/messages/message';
import TextArea from '~/fields/text-area';

require('./task-list-item-details.scss');

class TaskListItemDetails extends Component {

    constructor(props) {
        super(props);
        this.handleNotesSave = this.handleNotesSave.bind(this);
    }

    handleNotesSave(event) {
        if (event.target.value != this.props.taskNotes) {
            const message = document.getElementById(`task-details-message-${this.props.taskId}`);

            this.props.handleNotesSave({
                Notes: event.target.value
            });

            message.textContent = 'Task notes updated.';
            message.className = 'task-details-message animated fadeIn';

            setTimeout(() => {
                message.className = 'task-details-message animated fadeOut';
            }, 3000);
        }
    }

    render() {
        return (
            <div className="task-details">
                <FormGroup>
                    <label>Notes</label>

                    <TextArea
                        value={this.props.taskNotes}
                        handleBlur={this.handleNotesSave}
                    />
                </FormGroup>

                <DeleteButton
                    value={this.props.taskId}
                    handleClick={this.props.handleDelete}
                />

                <Message
                    id={`task-details-message-${this.props.taskId}`}
                    className="task-details-message hidden"
                    text="Task notes updated."
                />
            </div>
        );
    }
}

TaskListItemDetails.propTypes = {
    taskId: PropTypes.number.isRequired,
    taskNotes: PropTypes.string,
    handleDelete: PropTypes.func.isRequired,
    handleNotesSave: PropTypes.func.isRequired
};

TaskListItemDetails.defaultProps = {
    taskNotes: ''
};

export default TaskListItemDetails;
