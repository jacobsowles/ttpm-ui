import React, { Component, PropTypes } from 'react';
require('./task-list-group-filter-indicator.scss');

class TaskListGroupFilterIndicator extends Component {

    render() {
        return (
            <div className="task-list-group-filter-indicator">
                {
                    this.props.taskGroupName
                        ? <span>showing tasks in the <strong>{this.props.taskGroupName}</strong> group | <a onClick={this.props.handleFilterClear}>show all tasks</a></span>
                        : <span>showing all tasks</span>
                }
            </div>
        );
    }
}

TaskListGroupFilterIndicator.propTypes = {
    taskGroupName: PropTypes.string,
    handleFilterClear: PropTypes.func.isRequired
};

export default TaskListGroupFilterIndicator;
