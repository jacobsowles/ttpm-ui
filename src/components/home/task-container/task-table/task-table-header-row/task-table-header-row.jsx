// npm modules
import React from 'react';

// styles
require('./task-table-header-row.scss');

class TaskTableHeaderRow extends React.Component {

    render() {
        return (
            <tr>
                <th style={{width: '30px'}}></th>
                <th>Task</th>
                <th>Notes</th>
                <th style={{width: '30px'}}></th>
            </tr>
        );
    }
}

export default TaskTableHeaderRow;
