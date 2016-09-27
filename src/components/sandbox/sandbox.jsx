// npm modules
import React from 'react';

// components
import TaskTableTask from './task-table-task/task-table-task';

class Sandbox extends React.Component {

    render() {
        return (
            <TaskTableTask
                task={{
                    Name: 'Task Name',
                    Notes: 'These are some sick notes, bro.',
                    Complete: false
                }}
            />
        );
    }
}

export default Sandbox;
