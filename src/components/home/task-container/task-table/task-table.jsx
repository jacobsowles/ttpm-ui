// npm modules
import React from 'react';

// components
import NewTaskRow from './new-task-row/new-task-row.jsx';
import TaskTableHeaderRow from './task-table-header-row/task-table-header-row.jsx';
import TaskTableRow from './task-table-row/task-table-row.jsx';

// actions
import filterActions from '../../../../actions/filter-actions.js';

// styles
require('./task-table.scss');

class TaskTable extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="task-table table-responsive" style={{background: '#ffffff', padding: '15px'}}>
                        <table className="table table-striped">
                            <caption>
                                {
                                    this.props.taskGroupName
                                        ? <span>showing tasks in the <strong>{this.props.taskGroupName}</strong> group | <a href="/">show all tasks</a></span>
                                        : <span>showing all tasks</span>
                                }
                            </caption>
                            <tbody>
                                {
                                    this.props.tasks.map((task, key) => {
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
                                    })
                                }

                                <NewTaskRow handleNewTask={this.props.handleNewTask} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

TaskTable.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    taskGroupName: React.PropTypes.string,

    handleNewTask: React.PropTypes.func.isRequired,
    handleCompletionToggle: React.PropTypes.func.isRequired,
    handleTaskNameEdit: React.PropTypes.func.isRequired,
    handleTaskNotesEdit: React.PropTypes.func.isRequired
};

export default TaskTable;
