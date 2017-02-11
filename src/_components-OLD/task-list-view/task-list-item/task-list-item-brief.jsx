import React, { Component, PropTypes } from 'react';
require('./task-list-item-brief.scss');

class TaskListItemBrief extends Component {

    render() {
        return (
            <div className={`
                task-brief
                ${this.props.complete ? 'task-complete' : ''}
                ${this.props.isOpen ? 'edit-mode' : ''}
            `}>
                {this.props.children}
            </div>
        );
    }
}

TaskListItemBrief.propTypes = {
    complete: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired
};

export default TaskListItemBrief;
