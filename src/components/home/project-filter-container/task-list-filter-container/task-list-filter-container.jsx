// npm modules
import React from 'react';

// components
import TaskListFilter from './task-list-filter/task-list-filter.jsx';

// styles
require('./task-list-filter-container.scss');

class TaskListFilterContainer extends React.Component {

    render() {
        return (
            <ul className="task-list-filter-container">
                {
                    this.props.taskLists.map(function(taskList, key) {
                        return (
                            <TaskListFilter
                                key={key}
                                taskList={taskList}
                                handleItemClick={this.props.handleItemClick}
                                handleDeleteTaskListClick={this.props.handleDeleteTaskListClick}
                            />
                        );
                    }.bind(this))
                }
            </ul>
        );
    }
}

TaskListFilterContainer.propTypes = {
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    projectId: React.PropTypes.number.isRequired,
    handleItemClick: React.PropTypes.func.isRequired,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

export default TaskListFilterContainer;
