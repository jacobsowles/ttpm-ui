// npm modules
import React from 'react';
import { connect } from 'react-redux';

// components
import Analytics from './analytics/analytics';
import LoadingGraphic from '~/loading-graphic';
import TaskList from './task-list/task-list';

// actions
import taskActions from '@/actions/task-actions';

// util
import { completion } from '@/utils/filter-values';

class TaskContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showLoadingGraphic: true
        };

        this.handleNewTask = this.handleNewTask.bind(this);
    }

    componentWillMount() {
        this.props.fetchTasks();
    }

    componentDidMount() {
        this.state = {
            showLoadingGraphic: false
        };
    }

    handleNewTask(task) {
        task.TaskGroupId = this.props.filters.taskGroupId > 0 ? this.props.filters.taskGroupId : undefined;
        this.props.handleNewTask(task);
    }

    render() {
        return (
            <div>
                <LoadingGraphic showLoadingGraphic={this.state.showLoadingGraphic} />

                <TaskList
                    tasks={this.props.filteredTasks}
                    taskGroupName={this.props.taskGroupName}
                    handleNewTask={this.handleNewTask}
                    handleCompletionToggle={this.props.handleCompletionToggle}
                    handleTaskSave={this.props.handleTaskSave}
                    handleTaskDelete={this.props.handleTaskDelete}
                    updateDisplayOrder={this.props.updateDisplayOrder}
                />

                <Analytics
                    tasks={this.props.filteredTasks}
                    defaultActive={false}
                />
            </div>
        );
    }
}

TaskContainer.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    filteredTasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    defaultShowAnalytics: React.PropTypes.bool.isRequired,

    fetchTasks: React.PropTypes.func.isRequired,
    handleNewTask: React.PropTypes.func.isRequired,
    handleCompletionToggle: React.PropTypes.func.isRequired,
    handleTaskSave: React.PropTypes.func.isRequired,
    handleTaskDelete: React.PropTypes.func.isRequired
};

function allDescendents(taskGroups, taskGroupId) {
    let ids = [taskGroupId];

    taskGroups
        .filter(tg => tg.ParentTaskGroupId == taskGroupId)
        .forEach((taskGroup) => {
            ids = ids.concat(allDescendents(taskGroups, taskGroup.Id));
        });

    return ids;
}

function compareDisplayOrder(a, b) {
    if (a.DisplayOrder > b.DisplayOrder) {
        return 1;
    }

    if (a.DisplayOrder < b.DisplayOrder) {
        return -1;
    }

    return 0;
}

function filterTasks(tasks, taskGroups, filters) {
    if (filters.taskGroupId) {
        tasks = tasks
            .filter(t => allDescendents(taskGroups, filters.taskGroupId).includes(t.TaskGroupId))
            .sort((a, b) => {
                a = filters.displayOrders.find(tgdo => tgdo.TaskId == a.Id);
                b = filters.displayOrders.find(tgdo => tgdo.TaskId == b.Id);

                if (a && b) {
                    return compareDisplayOrder(a, b);
                }

                return 0;
            });
    }

    else {
        tasks = tasks.sort((a, b) => {
            return compareDisplayOrder(a, b);
        });
    }

    switch (filters.completion) {
        case completion.COMPLETE: {
            tasks = tasks.filter(t => t.Complete);
            break;
        }

        case completion.INCOMPLETE: {
            tasks = tasks.filter(t => !t.Complete);
            break;
        }
    }

    return tasks;
}

function getCurrentTaskGroupFilterName(taskGroups, taskGroupId) {
    if (!taskGroupId) {
        return;
    }

    return taskGroups.find(tg => tg.Id == taskGroupId).Name;
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks,
        filteredTasks: filterTasks(state.tasks, state.taskGroups, state.filters),
        taskGroupName: getCurrentTaskGroupFilterName(state.taskGroups, state.filters.taskGroupId),
        filters: state.filters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTasks: function() {
            dispatch(taskActions.fetchTasks());
        },

        handleNewTask: function(task) {
            dispatch(taskActions.createTask(task)).then(() => {
                dispatch(taskActions.fetchTasks());
            });
        },

        handleCompletionToggle: function(taskId, event) {
            dispatch(taskActions.toggleComplete(taskId));
        },

        handleTaskSave: function(taskId, task) {
            dispatch(taskActions.updateTask(taskId, task));
        },

        handleTaskDelete: function(event) {
            dispatch(taskActions.deleteTask(event.target.value));
        },

        updateDisplayOrder: function(firstTask, secondTask) {
            console.log('updating display order');
            console.log(firstTask);
            console.log(secondTask);
            dispatch(taskActions.swapDisplayOrder(firstTask.Id, secondTask.Id)).then(() => {
                dispatch(taskActions.fetchTasks());
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
