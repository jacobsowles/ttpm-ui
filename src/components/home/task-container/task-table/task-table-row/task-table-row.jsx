// npm modules
import React from 'react';

// components
import Checkbox from '../../../../fields/checkbox.jsx';
import TaskTableTask from '../task-table-task.jsx';

// styles
require('./task-table-row.scss');

class TaskTableRow extends React.Component {

    render() {
        return (
            <tr className={this.props.task.Complete ? 'task-table-row-complete' : ''}>
                <td style={{width: '30px'}}>
                    <Checkbox
                        checked={this.props.task.Complete}
                        includeWithChange={this.props.task}
                        handleChange={this.props.handleCompletionToggle}
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
