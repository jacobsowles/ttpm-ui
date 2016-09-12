// npm modules
import React from 'react';

// styles
require('./task-table-row.scss');

class TaskTableRow extends React.Component {

    constructor(props) {
        super(props);

        this.handleCompletionToggle = this.handleCompletionToggle.bind(this);
    }

    handleCompletionToggle() {
        this.props.handleCompletionToggle(this.props.task.Id);
    }

    render() {
        const stateStyle = this.props.task.Complete ? 'complete' : '';

        const checkbox = this.props.task.Complete
            ? <input type="checkbox" onChange={() => this.handleCompletionToggle()} defaultChecked />
            : <input type="checkbox" onChange={() => this.handleCompletionToggle()} />;

        return (
            <tr className={stateStyle}>
                <td style={{width: '30px'}}>{checkbox}</td>
                <td>{this.props.task.Name}</td>
                <td>{this.props.task.Notes}</td>
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
    handleCompletionToggle: React.PropTypes.func.isRequired
};

export default TaskTableRow;
