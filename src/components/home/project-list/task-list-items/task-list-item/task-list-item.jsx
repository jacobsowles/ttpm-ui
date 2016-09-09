// npm modules
import React from 'react';

// styles
require('./task-list-item.scss');

class TaskListItem extends React.Component {

    render() {
        return (
            <li className={this.props.class}>
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

TaskListItem.propTypes = {
    taskList: React.PropTypes.object.isRequired,
    class: React.PropTypes.string,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

export default TaskListItem;
