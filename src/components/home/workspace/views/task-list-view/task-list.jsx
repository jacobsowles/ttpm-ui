import React, { Component, PropTypes } from 'react';

import DraggableList from '~/draggable/draggable-list/draggable-list';
import TaskListItem from './task-list-item/task-list-item';
import TaskListNewItem from './task-list-new-item/task-list-new-item';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.getTaskListItems = this.getTaskListItems.bind(this);
    }

    getTaskListItems() {
        return this.props.tasks.map((task, key) => {
            return (
                <TaskListItem
                    key={key}
                    task={task}
                    handleCompletionToggle={this.props.handleCompletionToggle}
                    handleSave={this.props.handleTaskSave}
                    handleDelete={this.props.handleTaskDelete}
                />
            );
        });
    }

    render() {
        const listItems = this.getTaskListItems();

        return (
            <div className="task-list">
                <DraggableList
                    items={this.props.tasks}
                    updateDisplayOrder={this.props.updateDisplayOrder}
                >
                    {listItems}
                </DraggableList>

                <TaskListNewItem handleNewTask={this.props.handleNewTask} />
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,

    handleCompletionToggle: PropTypes.func.isRequired,
    handleNewTask: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired,
    handleTaskSave: PropTypes.func.isRequired,
    updateDisplayOrder: PropTypes.func.isRequired
};

export default TaskList;
