// npm modules
import React from 'react';

// components
import TaskListNewItem from './task-list-new-item/task-list-new-item';
import FilterIndicator from '~/home/filter-indicator/filter-indicator';
import TaskListItem from './task-list-item/task-list-item';

// actions
import filterActions from '@/actions/filter-actions.js';

// styles
require('./task-list.scss');

class TaskList extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-xs-12" style={{height: '100vh', overflow: 'scroll'}}>
                    <div className="task-list">
                        <FilterIndicator taskGroupName={this.props.taskGroupName} />

                        {
                            this.props.tasks.map((task, key) => {
                                return (
                                    <TaskListItem
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

                        <TaskListNewItem handleNewTask={this.props.handleNewTask} />
                    </div>
                </div>
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    taskGroupName: React.PropTypes.string,

    handleNewTask: React.PropTypes.func.isRequired,
    handleCompletionToggle: React.PropTypes.func.isRequired,
    handleTaskNameEdit: React.PropTypes.func.isRequired,
    handleTaskNotesEdit: React.PropTypes.func.isRequired
};

export default TaskList;
