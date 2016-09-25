// npm modules
import React from 'react';

// styles
const styles = {
    details: {
        margin: '15px 15px auto auto',
        fontSize: '.9em'
    },

    textarea: {
        height: '150px',
        fontSize: '.9em'
    },

    button: {
        fontSize: '.9em',
        marginTop: '10px'
    }
};

class TaskTableTaskDetails extends React.Component {

    render() {
        return (
            <div
                className="task-table-task-details form-group"
                style={styles.details}
            >
                <label>Notes</label>

                <textarea
                    type="text"
                    className="form-control"
                    style={styles.textarea}
                    defaultValue={this.props.task.Notes}
                    onBlur={(event) => this.props.handleNotesEdit(event.target.value, this.props.task)}
                >
                </textarea>

                <button
                    className="btn btn-danger"
                    style={styles.button}
                    onClick={() => this.props.handleTaskDelete(this.props.task.Id)}
                >
                    Delete Task
                </button>
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
