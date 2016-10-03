// npm modules
import React, { Component, PropTypes } from 'react';

// components
import Checkbox from '~/fields/checkbox/checkbox';
import TaskListItemBrief from './task-list-item-brief';
import TaskListItemDetails from './task-list-item-details';
import Toggler from '~/toggler/toggler';

// styles
require('./task-list-item.scss');

class TaskListItem extends Component {

    render() {
        const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
        const opacity = isDragging ? 0 : 1;

        return (
            <div className={`task-list-item ${this.props.isDimmed ? 'dimmed' : ''}`}>
                <Checkbox
                    checked={this.props.task.Complete}
                    handleChange={(event) => this.props.handleCompletionToggle(this.props.task.Id, event)}
                />

                <TaskListItemBrief
                    taskId={this.props.task.Id}
                    taskName={this.props.task.Name}
                    taskComplete={this.props.task.Complete}
                    isOpen={this.props.isOpen}
                    handleNameClick={this.props.handleNameClick}
                    handleNameSave={this.props.handleSave}
                    hideDetails={this.props.closeTask}
                    showDetails={this.props.openTask}
                />

                <Toggler isVisible={this.props.isOpen}>
                    <TaskListItemDetails
                        taskId={this.props.task.Id}
                        taskNotes={this.props.task.Notes}
                        handleDelete={this.props.handleDelete}
                        handleNotesSave={this.props.handleSave}
                    />
                </Toggler>
            </div>
        );
    }
}

TaskListItem.propTypes = {
    task: PropTypes.shape({
        Id: PropTypes.number.isRequired,
        Name: PropTypes.string.isRequired,
        Notes: PropTypes.string,
        Complete: PropTypes.bool.isRequired
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    isDimmed: PropTypes.bool.isRequired,

    openTask: PropTypes.func.isRequired,
    closeTask: PropTypes.func.isRequired,
    handleNameClick: PropTypes.func.isRequired,
    handleCompletionToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired
};

export default TaskListItem;
