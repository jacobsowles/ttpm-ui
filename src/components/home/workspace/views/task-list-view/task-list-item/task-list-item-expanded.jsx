import React from 'react';
require('./task-list-item-expanded.scss');

class TaskListItemExpanded extends React.Component {
    render() {
        return (
            <div className="task-list-item-expanded">
                {this.props.children}
            </div>
        );
    }
}

export default TaskListItemExpanded;
