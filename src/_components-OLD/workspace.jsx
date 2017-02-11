// npm modules
import React, { Component, PropTypes } from 'React';
import { connect } from 'react-redux';
import { Icon, PageSubtitle, PageTitle } from 'react-building-blocks';

// app modules
import UserControls from './user-controls';
import ViewWrapper from './view-wrapper';

// actions
import taskActions from '@/actions/task-actions';

// utils
import { completion, date, status } from '@/utils/filter-values';
import Filterer from '@/utils/filterer';
import TaskGroupHelper from '@/utils/task-groups';

class Workspace extends Component {
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
            <main>
                <header>
                    <div>
                        <Icon
                            id="sidebar-trigger"
                            glyph="bars"
                            onClick={() => {}}
                        />
                        <Icon glyph="search" />
                        <input
                            type="text"
                            style={{
                                height: '39px',
                                border: '0'
                            }}
                            placeholder="Search tasks"
                        />
                    </div>

                    <div>
                        <UserControls />
                    </div>
                </header>

                <div>
                    <div style={{
                        borderBottom: '1px solid #E3E3E3',
                        padding: '30px 30px 0 30px'
                    }}>
                        <PageTitle>{this.props.taskGroupName}</PageTitle>
                        <PageSubtitle>Group description or something goes here</PageSubtitle>

                        <div style={{
                            marginTop: '30px'
                        }}>
                            <ul style={{
                                listStyleType: 'none',
                                textTransform: 'uppercase',
                                fontSize: '9px',
                                letterSpacing: '1px',
                                marginBottom: '15px'
                            }}>
                                <li style={{
                                    display: 'inline-block',
                                    marginRight: '30px'
                                }}>
                                    <a
                                        href="#"
                                        style={{
                                            fontWeight: 'bold',
                                            padding: '10px 0px',
                                            borderBottom: '3px solid #A33B20'
                                        }}
                                    >
                                        List
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ViewWrapper />
                </div>
            </main>
        );
    }
}

Workspace.propTypes = {
    filteredTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    taskGroupName: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,

    fetchTasks: PropTypes.func.isRequired,
    handleNewTask: PropTypes.func.isRequired,
    handleCompletionToggle: PropTypes.func.isRequired,
    handleTaskSave: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired
};

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
    const filterer = new Filterer(tasks, taskGroups, filters);
    tasks = filterer.filter();

    return filters.taskGroupId
        ? tasks.sort((a, b) => {
            a = filters.displayOrders.find(tgdo => tgdo.TaskId == a.Id);
            b = filters.displayOrders.find(tgdo => tgdo.TaskId == b.Id);

            if (a && b) {
                return compareDisplayOrder(a, b);
            }

            return 0;
        })
        : tasks.sort((a, b) => {
            return compareDisplayOrder(a, b);
        });
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

        handleTaskDelete: function(taskId) {
            dispatch(taskActions.deleteTask(taskId));
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

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
