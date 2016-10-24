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
            <div className={`task-list-item row ${this.props.isDimmed ? 'dimmed' : ''}`}>
                <Checkbox
                    checked={this.props.task.Complete}
                    handleChange={(event) => this.props.handleCompletionToggle(this.props.task.Id, event)}
                />

                <TaskListItemBrief
                    id={this.props.task.Id}
                    name={this.props.task.Name}
                    complete={this.props.task.Complete}
                    lastDateCompleted={this.props.task.LastDateCompleted}
                    plannedDate={this.props.task.PlannedDate}
                    dueDate={this.props.task.DueDate}
                    isOpen={this.props.isOpen}
                    handleNameClick={this.props.handleNameClick}
                    handleSave={this.props.handleSave}
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
        Complete: PropTypes.bool.isRequired,
        LastDateCompleted: PropTypes.string,
        PlannedDate: PropTypes.string,
        DueDate: PropTypes.string
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
