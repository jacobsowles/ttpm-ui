// npm modules
import React from 'react';

// styles
require('./task-table-row.scss');

class TaskTableRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.task.Name}</td>
                <td>{this.props.task.Notes}</td>
            </tr>
        );
    }
}

TaskTableRow.propTypes = {
    task: React.PropTypes.object.isRequired
};

export default TaskTableRow;
