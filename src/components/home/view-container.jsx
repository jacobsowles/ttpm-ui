// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// components
import Analytics from './analytics/analytics';
import LoadingWrapper from '~/loading/loading-wrapper';
import TaskListView from './views/task-list-view/task-list-view';

// actions
import taskActions from '@/actions/task-actions';

// util
import { completion, date, status } from '@/utils/filter-values';

class ViewContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    componentWillMount() {
        this.props.fetchTasks();
    }

    componentDidMount() {
        this.state = {
            isLoading: false
        };
    }

    render() {
        return (
            <LoadingWrapper showLoadingGraphic={this.state.isLoading}>
                <TaskListView
                    tasks={this.props.filteredTasks}
                    taskGroupName={this.props.taskGroupName}
                    isShowingOnlyCompleteTasks={this.props.filters.completion == completion.COMPLETE}
                    handleCompletionToggle={this.props.handleCompletionToggle}
                    handleNewTask={(task, newTaskInputField) => this.props.handleNewTask(task, this.props.filters.taskGroupId, newTaskInputField)}
                    handleTaskDelete={this.props.handleTaskDelete}
                    handleTaskSave={this.props.handleTaskSave}
                    updateDisplayOrder={this.props.updateDisplayOrder}
                />

                <Analytics
                    tasks={this.props.filteredTasks}
                    defaultActive={false}
                />
            </LoadingWrapper>
        );
    }
}

ViewContainer.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    filteredTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    defaultShowAnalytics: PropTypes.bool.isRequired,

    fetchTasks: PropTypes.func.isRequired,
    handleNewTask: PropTypes.func.isRequired,
    handleCompletionToggle: PropTypes.func.isRequired,
    handleTaskSave: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired
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
    // filter by task group
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

    // filter by completion
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

    // filter by date
    switch (filters.date) {
        case date.TODAY: {
            tasks = tasks.filter(t =>
                moment(t.PlannedDate).date() <= moment().date() ||
                moment(t.DueDate).date() <= moment().date()
            );
            break;
        }

        case date.TOMORROW: {
            tasks = tasks.filter(t =>
                moment(t.PlannedDate).date() == moment().add('days', 1).date() ||
                moment(t.DueDate).date() == moment().add('days', 1).date()
            );
            break;
        }

        case date.DUE: {
            tasks = tasks.filter(t => moment(t.DueDate).date() <= moment().date());
            break;
        }

        case date.UNPLANNED: {
            tasks = tasks.filter(t => !t.PlannedDate);
            break;
        }
    }

    // filter by status
    switch (filters.status) {
        case (status.BLOCKED): {
            tasks = tasks.filter(t => t.Name.toLowerCase().includes('blocked'));
            break;
        }

        case (status.DELEGATED): {
            tasks = tasks.filter(t => t.Name.toLowerCase().includes('delegated'));
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

        handleNewTask: function(task, taskGroupFilter, newTaskInputField) {
            task.TaskGroupId = taskGroupFilter > 0 ? taskGroupFilter : undefined;
            dispatch(taskActions.createTask(task)).then(() => {
                dispatch(taskActions.fetchTasks()).then(() => {
                    newTaskInputField.focus();
                });
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
