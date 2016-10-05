import React, { Component, PropTypes } from 'react';
import EmptyTaskListNewItem from './task-list-new-item/empty-task-list-new-item';
import TaskListPlaceholder from './task-list-placeholder';

class EmptyTaskList extends Component {

    render() {
        return (
            <div className="empty-task-list">
                {
                    this.props.isShowingOnlyCompleteTasks
                        ? (
                            <TaskListPlaceholder
                                headline="You've got work to do."
                                body="You haven't completed any tasks with these criteria. You're better than that."
                            />
                        )
                        : (
                            <div>
                                <TaskListPlaceholder
                                    headline="Hello?"
                                    body="It's looking a little barren in here. Use the link below to add tasks."
                                />

                                <EmptyTaskListNewItem handleNewTask={this.props.handleNewTask} />
                            </div>
                        )
                }
            </div>
        );
    }
}

EmptyTaskList.propTypes = {
    isShowingOnlyCompleteTasks: PropTypes.bool.isRequired,
    handleNewTask: PropTypes.func.isRequired
};

export default EmptyTaskList;
