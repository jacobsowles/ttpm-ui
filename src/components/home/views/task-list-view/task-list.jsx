import React, { Component, PropTypes } from 'react';

import DraggableList from '~/draggable/draggable-list/draggable-list';
import TaskListItem from './task-list-item/task-list-item';
import TaskListNewItem from './task-list-new-item/task-list-new-item';

class TaskList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openTaskIds: []
        };

        this.openTask = this.openTask.bind(this);
        this.closeTask = this.closeTask.bind(this);
        this.getTaskListItems = this.getTaskListItems.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
    }

    openTask(taskId, event) {
        if (!this.state.openTaskIds.includes(taskId)) {
            this.setState({
                openTaskIds: this.state.openTaskIds.concat(taskId)
            });
        }
    }

    closeTask(taskId, event) {
        const newList = Object.assign([], this.state.openTaskIds);
        newList.splice(this.state.openTaskIds.indexOf(taskId), 1);

        this.setState({
            openTaskIds: newList
        });
    }

    getTaskListItems() {
        return this.props.tasks.map((task, key) => {
            const isOpen = this.state.openTaskIds.includes(task.Id);

            return (
                <TaskListItem
                    key={key}
                    task={task}
                    isOpen={isOpen}
                    isDimmed={!isOpen && this.state.openTaskIds.length != 0}
                    openTask={this.openTask}
                    closeTask={this.closeTask}
                    handleNameClick={this.handleTaskNameClick}
                    handleCompletionToggle={this.props.handleCompletionToggle}
                    handleSave={this.props.handleTaskSave}
                    handleDelete={this.handleTaskDelete}
                />
            );
        });
    }

    handleTaskDelete(event) {
        this.closeTask(event.target.value);
        this.props.handleTaskDelete(event);
    }

    render() {
        const listItems = this.getTaskListItems();

        return (
            <div className="task-list">
                {
                    this.state.openTaskIds.length == 0
                        ? (
                            <DraggableList
                                items={this.props.tasks}
                                updateDisplayOrder={this.props.updateDisplayOrder}
                            >
                                {listItems}
                            </DraggableList>
                        )
                        : (
                            <div>
                                {listItems}
                            </div>
                        )
                }

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
