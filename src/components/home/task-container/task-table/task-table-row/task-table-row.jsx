// npm modules
import React from 'react';

// components
import ViewEditToggleField from '../../../../fields/view-edit-toggle-field/view-edit-toggle-field.jsx';

// styles
require('./task-table-row.scss');

class TaskTableRow extends React.Component {

    buildField(text, eventHandler) {
        return this.props.task.Complete
            ? <input type="text" value={text} disabled />
            : (
                <ViewEditToggleField
                    text={text}
                    handleSubmit={eventHandler}
                    includeWithSubmit={this.props.task}
                />
            );
    }

    render() {
        return (
            <tr className={this.props.task.Complete ? 'task-table-row-complete' : ''}>
                <td style={{width: '30px'}}><input type="checkbox" checked={this.props.task.Complete} onChange={() => this.props.handleCompletionToggle(this.props.task.Id)} /></td>
                <td>{this.buildField(this.props.task.Name, this.props.handleNameEdit)}</td>
                <td>{this.buildField(this.props.task.Notes, this.props.handleNotesEdit)}</td>
                <td className="task-table-delete-task" style={{width: '30px'}}><span onClick={() => this.props.handleTaskDelete(this.props.task.Id)}>&times;</span></td>
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
