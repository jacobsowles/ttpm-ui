// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Analytics from './analytics/analytics.jsx';
import LoadingGraphic from '../../loading-graphic/loading-graphic.jsx';
import TaskTable from './task-table/task-table.jsx';

// actions
import taskActions from '../../../actions/task-actions.js';

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

                <TaskTable
                    tasks={this.props.filteredTasks}
                    handleNewTask={this.handleNewTask}
                    handleCompletionToggle={this.props.handleCompletionToggle}
                    handleTaskNameEdit={this.props.handleTaskNameEdit}
                    handleTaskNotesEdit={this.props.handleTaskNotesEdit}
                    handleTaskDelete={this.props.handleTaskDelete}
                />

                <Analytics tasks={this.props.filteredTasks} />
            </div>
        );
    }
}

TaskContainer.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    filteredTasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchTasks: React.PropTypes.func.isRequired,
    handleNewTask: React.PropTypes.func.isRequired,
    handleCompletionToggle: React.PropTypes.func.isRequired,
    handleTaskNameEdit: React.PropTypes.func.isRequired,
    handleTaskNotesEdit: React.PropTypes.func.isRequired,
    handleTaskDelete: React.PropTypes.func.isRequired
};

function filterTasks(tasks, filters) {
    if (filters.taskGroupId) {
        return tasks.filter(t => t.TaskGroupId == filters.taskGroupId);
    }

    return tasks;
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks,
        filteredTasks: filterTasks(state.tasks, state.filters)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTasks: function() {
            dispatch(taskActions.fetchTasks());
        },

        handleNewTask: function(task) {
            dispatch(taskActions.createTask(task));
        },

        handleCompletionToggle: function(taskId) {
            dispatch(taskActions.toggleComplete(taskId));
        },

        handleTaskNameEdit: function(newName, task) {
            task.Name = newName;
            dispatch(taskActions.updateTask(task));
        },

        handleTaskNotesEdit: function(newNotes, task) {
            task.Notes = newNotes;
            dispatch(taskActions.updateTask(task));
        },

        handleTaskDelete: function(taskId) {
            dispatch(taskActions.deleteTask(taskId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
