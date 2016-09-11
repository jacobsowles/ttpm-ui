// npm modules
import React from 'react';

// components
import TaskListFilter from './task-list-filter/task-list-filter.jsx';
import ViewEditToggleField from '../../../view-edit-toggle-field/view-edit-toggle-field.jsx';

// styles
require('./task-list-filter-group.scss');

class TaskListFilterGroup extends React.Component {

    render() {
        return (
            <ul className="task-list-filter-group">
                {
                    this.props.taskLists.map(function(taskList, key) {
                        return (
                            <TaskListFilter
                                key={key}
                                taskList={taskList}
                                handleTaskListClick={this.props.handleTaskListClick}
                                handleDeleteTaskListClick={this.props.handleDeleteTaskListClick}
                            />
                        );
                    }.bind(this))
                }

                <ViewEditToggleField
                    type='task-list'
                    text='+ Add a new task list'
                    handleSubmit={this.props.handleAddTaskListClick}
                    includeWithSubmit={{
                        projectId: this.props.projectId
                    }}
                />
            </ul>
        );
    }
}

TaskListFilterGroup.propTypes = {
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    projectId: React.PropTypes.number.isRequired,

    handleTaskListClick: React.PropTypes.func.isRequired,
    handleAddTaskListClick: React.PropTypes.func.isRequired,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

export default TaskListFilterGroup;
