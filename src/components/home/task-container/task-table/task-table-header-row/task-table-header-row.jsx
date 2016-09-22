// npm modules
import React from 'react';

// styles
require('./task-table-header-row.scss');

class TaskTableHeaderRow extends React.Component {

    render() {
        return (
            <tr>
                <th></th>
                <th>Task</th>
                <th>Notes</th>
                <th></th>
            </tr>
        );
    }
}

export default TaskTableHeaderRow;
