// npm modules
import React, { Component, PropTypes } from 'react';

// components
import DraggableList from '~/draggable/draggable-list/draggable-list';
import EmptyTaskListNewItem from './task-list-new-item/empty-task-list-new-item';
import TaskListFilterContainer from './task-list-filter-container/task-list-filter-container';
import TaskListItem from './task-list-item/task-list-item';
import TaskListNewItem from './task-list-new-item/task-list-new-item';
import TaskListPlaceholder from './task-list-placeholder';

// actions
import filterActions from '@/actions/filter-actions.js';

// styles
require('./task-list-wrapper.scss');

class TaskListWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openTaskIds: []
        };

        this.openTask = this.openTask.bind(this);
        this.closeTask = this.closeTask.bind(this);
        this.handleTaskNameClick = this.handleTaskNameClick.bind(this);
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

    handleTaskNameClick(taskId, event) {
        this.openTask(taskId);
    }

    handleTaskDelete(event) {
        this.closeTask(event.target.value);
        this.props.handleTaskDelete(event);
    }

    render() {
        const listItems =
            this.props.tasks.map((task, key) => {
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

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="task-list-wrapper">
                        

                        {
                            this.props.tasks.length == 0
                            ? (
                                <div>
                                    <TaskListPlaceholder
                                        headline={this.props.isShowingOnlyCompleteTasks ? 'You\'ve got work to do.' : 'Hello?'}
                                        body={
                                            this.props.isShowingOnlyCompleteTasks
                                                ? 'You haven\'t completed any tasks with these criteria. You\'re better than that.'
                                                : 'It\'s looking a little barren in here. Use the link below to add tasks.'
                                        }
                                    />
                                    <EmptyTaskListNewItem handleNewTask={this.props.handleNewTask} />
                                </div>
                            )
                            : (
                                <div>
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
                                            {listItems}
                                            
                                        )
                                        
                                    }
                                </div>
                                
                            )
                            
                        }
                        <TaskListNewItem handleNewTask={this.props.handleNewTask} />
                    </div>
                </div>
            </div>
        );
    }
}

TaskListWrapper.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    taskGroupName: PropTypes.string,
    isShowingOnlyCompleteTasks: PropTypes.bool.isRequired,

    handleNewTask: PropTypes.func.isRequired,
    handleCompletionToggle: PropTypes.func.isRequired,
    handleTaskSave: PropTypes.func.isRequired,
    updateDisplayOrder: PropTypes.func.isRequired
};

export default TaskListWrapper;
