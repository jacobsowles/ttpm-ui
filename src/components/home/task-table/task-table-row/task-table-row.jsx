// npm modules
import React from 'react';

// components
import ViewEditToggleField from '../../../fields/view-edit-toggle-field/view-edit-toggle-field.jsx';

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
        const stateStyle = this.props.task.Complete ? 'complete' : '';

        const checkbox = this.props.task.Complete
            ? <input type="checkbox" onChange={() => this.props.handleCompletionToggle(this.props.task.Id)} defaultChecked />
            : <input type="checkbox" onChange={() => this.props.handleCompletionToggle(this.props.task.Id)} />;

        return (
            <tr className={stateStyle}>
                <td style={{width: '30px'}}>{checkbox}</td>
                <td>{this.buildField(this.props.task.Name, this.props.handleNameEdit)}</td>
                <td>{this.buildField(this.props.task.Notes, this.props.handleNotesEdit)}</td>
            </tr>
        );
    }
}

TaskTableRow.propTypes = {
    task: React.PropTypes.shape({
        Name: React.PropTypes.string.isRequired,
        Notes: React.PropTypes.string.isRequired,
        Complete: React.PropTypes.bool.isRequired
    }),
    handleCompletionToggle: React.PropTypes.func.isRequired,
    handleNameEdit: React.PropTypes.func.isRequired,
    handleNotesEdit: React.PropTypes.func.isRequired
};

export default TaskTableRow;
