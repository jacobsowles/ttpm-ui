// npm modules
import React from 'react';

// components
import TaskTableTask from '../task-table-task/task-table-task.jsx';

// styles
require('./task-table-row.scss');

class TaskTableRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            complete: props.task.Complete
        };

        this.handleCompletionToggle = this.handleCompletionToggle.bind(this);
    }

    handleCompletionToggle() {
        this.setState({
            complete: !this.state.complete
        });

        this.props.handleCompletionToggle(this.props.task.Id);
    }

    render() {
        return (
            <tr className={this.state.complete ? 'task-table-row-complete' : ''}>
                <td style={{width: '30px'}}>
                    <input
                        type="checkbox"
                        checked={this.state.complete}
                        onChange={() => this.handleCompletionToggle()}
                    />
                </td>
                <td>
                    <TaskTableTask
                        task={this.props.task}
                        handleNameEdit={this.props.handleNameEdit}
                        handleNotesEdit={this.props.handleNotesEdit}
                        handleTaskDelete={this.props.handleTaskDelete}
                    />
                </td>
            </tr>
        );
    }
}

TaskTableRow.propTypes = {
    task: React.PropTypes.shape({
        Name: React.PropTypes.string.isRequired,
        Notes: React.PropTypes.string,
        Complete: React.PropTypes.bool.isRequired
    }),
    handleCompletionToggle: React.PropTypes.func.isRequired,
    handleNameEdit: React.PropTypes.func.isRequired,
    handleNotesEdit: React.PropTypes.func.isRequired,
    handleTaskDelete: React.PropTypes.func.isRequired
};

export default TaskTableRow;
