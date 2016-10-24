import React, { Component, PropTypes } from 'react';

import EmptyTaskList from './empty-task-list';
import TaskListFilterContainer from './task-list-filter-container/task-list-filter-container';
import TaskList from './task-list';

require('./task-list-view.scss');

class TaskListView extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 task-list-view no-horizontal-padding">
                    <TaskListFilterContainer taskGroupName={this.props.taskGroupName} />

                    {
                        this.props.tasks.length == 0
                            ? (
                                <EmptyTaskList
                                    isShowingOnlyCompleteTasks={this.props.isShowingOnlyCompleteTasks}
                                    handleNewTask={this.props.handleNewTask}
                                />
                            )
                            : (

                                <TaskList
                                    tasks={this.props.tasks}
                                    handleCompletionToggle={this.props.handleCompletionToggle}
                                    handleNewTask={this.props.handleNewTask}
                                    handleTaskDelete={this.props.handleTaskDelete}
                                    handleTaskSave={this.props.handleTaskSave}
                                    updateDisplayOrder={this.props.updateDisplayOrder}
                                />
                            )
                    }
                </div>
            </div>
        );
    }
}

TaskListView.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    taskGroupName: PropTypes.string,
    isShowingOnlyCompleteTasks: PropTypes.bool.isRequired,

    handleNewTask: PropTypes.func.isRequired,
    handleCompletionToggle: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired,
    handleTaskSave: PropTypes.func.isRequired,
    updateDisplayOrder: PropTypes.func.isRequired
};

export default TaskListView;
