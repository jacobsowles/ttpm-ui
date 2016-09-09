// npm modules
import React from 'react';

// components
import TaskListItem from './task-list-item/task-list-item.jsx';

// styles
require('./task-list-items.scss');

class TaskListItems extends React.Component {

    render() {
        return (
            <ul className="task-list-items">
                {
                    this.props.taskLists.map(function(taskList, key) {
                        return (
                            <TaskListItem
                                key={key}
                                taskList={taskList}
                                handleDeleteTaskListClick={this.props.handleDeleteTaskListClick}
                            />
                        );
                    }.bind(this))
                }
            </ul>
        );
    }
}

TaskListItems.propTypes = {
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    projectId: React.PropTypes.number.isRequired,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

export default TaskListItems;
