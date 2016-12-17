import React from 'react';
require('./task-list-filter-wrapper.scss');

class TaskListFilterWrapper extends React.Component {

    render() {
        return (
            <div className="task-list-filter-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default TaskListFilterWrapper;
