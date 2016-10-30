import React, { Component, PropTypes } from 'react';

import Checkbox from '~/fields/checkbox/checkbox';
import TaskListItemActions from './task-list-item-actions';
import TaskListItemBrief from './task-list-item-brief';
import TasklistItemDates from './task-list-item-dates';
import TaskListItemDetails from './task-list-item-details';
import TaskListItemExpanded from './task-list-item-expanded';
import TextBox from '~/fields/text-box';
import Toggler from '~/toggler/toggler';

require('./task-list-item.scss');

class TaskListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openContentType: ''
        };

        this.handleDueDateSave = this.handleDueDateSave.bind(this);
        this.handleNameSave = this.handleNameSave.bind(this);
        this.handlePlannedDateSave = this.handlePlannedDateSave.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.toggleTaskContent = this.toggleTaskContent.bind(this);
    }

    handleDueDateSave(date) {
        if (date != this.props.dueDate) {
            this.handleSave({
                DueDate: date || ''
            });
        }
    }

    handleNameSave(event) {
        if (event.target.value != this.props.task.Name) {
            this.handleSave({
                Name: event.target.value
            });
        }
    }

    handlePlannedDateSave(date) {
        if (date != this.props.task.PlannedDate) {
            this.handleSave({
                PlannedDate: date || ''
            });
        }
    }

    handleSave(data) {
        this.props.handleSave(this.props.task.Id, data);
    }

    toggleTaskContent(contentType) {
        if (this.state.openContentType == contentType) {
            this.state.openContentType = '';
            this.props.closeTask(this.props.task.Id);
        }

        else {
            this.state.openContentType = contentType;
            this.props.openTask(this.props.task.Id);
        }
    }

    render() {
        const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
        const opacity = isDragging ? 0 : 1;

        return (
            <div className={`task-list-item ${this.props.isDimmed ? 'dimmed' : ''}`}>
                <TaskListItemBrief
                    complete={this.props.task.Complete}
                    isOpen={this.props.isOpen}
                >
                    <Checkbox
                        checked={this.props.task.Complete}
                        handleChange={(event) => this.props.handleCompletionToggle(this.props.task.Id, event)}
                    />
                    <TextBox
                        className="task-name"
                        isDisabled={this.props.task.Complete}
                        value={this.props.task.Name}
                        handleBlur={this.handleNameSave}
                    />

                    <TaskListItemActions
                        openContentType={this.state.openContentType}
                        handleClick={this.toggleTaskContent}
                    />

                    <TasklistItemDates
                        complete={this.props.task.Complete}
                        dueDate={this.props.task.DueDate}
                        lastDateCompleted={this.props.task.LastDateCompleted}
                        plannedDate={this.props.task.PlannedDate}
                        handleSave={this.props.handleSave}
                    />
                </TaskListItemBrief>

                <Toggler isVisible={this.props.isOpen}>
                    <TaskListItemExpanded>
                        <TaskListItemDetails
                            taskId={this.props.task.Id}
                            taskNotes={this.props.task.Notes}
                            handleDelete={this.props.handleDelete}
                            handleNotesSave={this.handleSave}
                        />
                    </TaskListItemExpanded>
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
    handleCompletionToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired
};

export default TaskListItem;
