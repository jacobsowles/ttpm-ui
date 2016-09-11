// npm modules
import React from 'react';

// styles
require('./task-list-filter.scss');

class TaskListFilter extends React.Component {

    render() {
        return (
            <li
                className="task-list-filter"
                onClick={() => this.props.handleItemClick(this.props.taskList.Id)}
            >
                {this.props.taskList.Name}
                <span className="item-actions">
                    <span
                        className="delete-task-list"
                        onClick={() => this.props.handleDeleteTaskListClick(this.props.taskList.Id)}
                    >
                        &times;
                    </span>
                </span>
            </li>
        );
    }
}

TaskListFilter.propTypes = {
    taskList: React.PropTypes.object.isRequired,
    handleItemClick: React.PropTypes.func.isRequired,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

export default TaskListFilter;
