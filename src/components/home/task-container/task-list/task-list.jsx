// npm modules
import React, { Component, PropTypes } from 'react';

// components
import DraggableList from '~/draggable/draggable-list/draggable-list';
import FilterIndicator from '~/home/filter-indicator/filter-indicator';
import TaskListItem from './task-list-item/task-list-item';
import TaskListNewItem from './task-list-new-item/task-list-new-item';

// actions
import filterActions from '@/actions/filter-actions.js';

// styles
require('./task-list.scss');

class TaskList extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="task-list">
                        <FilterIndicator taskGroupName={this.props.taskGroupName} />

                        <DraggableList
                            items={this.props.tasks}
                            updateDisplayOrder={this.props.updateDisplayOrder}
                        >
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
                        </DraggableList>

                        <TaskListNewItem handleNewTask={this.props.handleNewTask} />
                    </div>
                </div>
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    taskGroupName: PropTypes.string,

    handleNewTask: PropTypes.func.isRequired,
    handleCompletionToggle: PropTypes.func.isRequired,
    handleTaskNameEdit: PropTypes.func.isRequired,
    handleTaskNotesEdit: PropTypes.func.isRequired,
    updateDisplayOrder: PropTypes.func.isRequired
};

export default TaskList;
