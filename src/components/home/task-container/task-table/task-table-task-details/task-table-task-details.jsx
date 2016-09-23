// npm modules
import React from 'react';

// styles
require('./task-table-task-details.scss');

class TaskTableTaskDetails extends React.Component {

    render() {
        return (
            <div className="task-table-task-details form-group">
                <label>Notes</label>

                <textarea
                    type="text"
                    className="form-control"
                    defaultValue={this.props.task.Notes}
                    onBlur={(event) => this.props.handleNotesEdit(event.target.value)}
                >
                </textarea>

                <button className="btn btn-danger" onClick={() => this.props.handleTaskDelete(this.props.task.Id)}>Delete Task</button>
            </div>
        );
    }
}

TaskTableTaskDetails.propTypes = {
    task: React.PropTypes.shape({
        Name: React.PropTypes.string.isRequired,
        Notes: React.PropTypes.string,
        Complete: React.PropTypes.bool.isRequired
    }),
    handleNotesEdit: React.PropTypes.func.isRequired,
    handleTaskDelete: React.PropTypes.func.isRequired
};

export default TaskTableTaskDetails;
