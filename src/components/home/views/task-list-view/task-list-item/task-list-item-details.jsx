import React, { Component, PropTypes } from 'react';
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
                <label>Notes</label>

                <TextArea
                    value={this.props.taskNotes}
                    handleBlur={this.handleNotesSave}
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
    handleNotesSave: PropTypes.func.isRequired
};

TaskListItemDetails.defaultProps = {
    taskNotes: ''
};

export default TaskListItemDetails;
