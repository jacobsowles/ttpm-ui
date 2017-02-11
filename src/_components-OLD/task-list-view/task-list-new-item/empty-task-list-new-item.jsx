import React from 'react';
import TaskListNewItem from './task-list-new-item';
require('./empty-task-list-new-item.scss');

class EmptyTaskListNewItem extends React.Component {

    render() {
        return (
            <TaskListNewItem
                {...this.props}
                className="empty-task-list-new-item"
            />
        );
    }
}

EmptyTaskListNewItem.propTypes = {
    handleNewTask: React.PropTypes.func.isRequired
};

export default EmptyTaskListNewItem;
