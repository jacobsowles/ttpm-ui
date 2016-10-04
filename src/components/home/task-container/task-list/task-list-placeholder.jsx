import React from 'react';
require('./task-list-placeholder.scss');

class TaskListPlaceholder extends React.Component {

    render() {
        return (
            <p className="task-list-placeholder">
                <span className="large">Hello?</span>
                It's looking a little barren in here. Use the link below to add tasks.
            </p>
        );
    }
}

export default TaskListPlaceholder;
