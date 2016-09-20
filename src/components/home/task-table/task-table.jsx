// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import LoadingGraphic from '../../loading-graphic/loading-graphic.jsx';
import NewTaskRow from './new-task-row/new-task-row.jsx';
import TaskTableHeaderRow from './task-table-header-row/task-table-header-row.jsx';
import TaskTableRow from './task-table-row/task-table-row.jsx';

// actions
import taskActions from '../../../actions/task-actions.js';

// styles
require('./task-table.scss');

class TaskTable extends React.Component {

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
        task.TaskListId = this.props.activeTaskListId;
        this.props.handleNewTask(task);
    }

    render() {
        return (
            <div id="task-table" className="table-responsive">
                <LoadingGraphic showLoadingGraphic={this.state.showLoadingGraphic} />

                <table className="table table-striped">
                    <thead>
                        <TaskTableHeaderRow />
                    </thead>
                    <tbody>
                        {
                            this.props.filteredTasks.map(function(task, key) {
                                return (
                                    <TaskTableRow
                                        key={key}
                                        task={task}
                                        handleCompletionToggle={this.props.handleCompletionToggle}
                                        handleNameEdit={this.props.handleTaskNameEdit}
                                        handleNotesEdit={this.props.handleTaskNotesEdit}
                                        handleTaskDelete={this.props.handleTaskDelete}
                                    />
                                );
                            }.bind(this))
                        }
                        {
                            this.props.activeTaskListId != 0 ? <NewTaskRow handleNewTask={this.handleNewTask} /> : null
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

TaskTable.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    filteredTasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    activeTaskListId: React.PropTypes.number.isRequired,

    fetchTasks: React.PropTypes.func.isRequired,
    handleNewTask: React.PropTypes.func.isRequired,
    handleCompletionToggle: React.PropTypes.func.isRequired,
    handleTaskNameEdit: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks.tasks,
        filteredTasks: state.tasks.filteredTasks,
        activeTaskListId: state.tasks.activeTaskListId
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);
