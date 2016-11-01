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
            isOpen: false,
            openContentType: ''
        };

        this.closeTask = this.closeTask.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleNameSave = this.handleNameSave.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.openTask = this.openTask.bind(this);
        this.toggleTaskContent = this.toggleTaskContent.bind(this);
    }

    closeTask() {
        this.setState({
            isOpen: false,
            openContentType: ''
        });
    }

    handleDelete() {
        this.props.handleDelete(this.props.task.Id);
    }

    handleNameSave(event) {
        if (event.target.value != this.props.task.Name) {
            this.handleSave({
                Name: event.target.value
            });
        }
    }

    handleSave(data) {
        this.props.handleSave(this.props.task.Id, data);
        this.closeTask();
    }

    openTask(contentType) {
        this.setState({
            isOpen: true,
            openContentType: contentType
        });
    }

    toggleTaskContent(contentType) {
        if (this.state.openContentType == contentType) {
            this.closeTask();
        } else {
            this.openTask(contentType);
        }
    }

    render() {
        const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
        const opacity = isDragging ? 0 : 1;

        return (
            <div className="task-list-item">
                <TaskListItemBrief
                    complete={this.props.task.Complete}
                    isOpen={this.state.isOpen}
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
                        handleDelete={this.handleDelete}
                    />

                    <TasklistItemDates
                        complete={this.props.task.Complete}
                        dueDate={this.props.task.DueDate}
                        lastDateCompleted={this.props.task.LastDateCompleted}
                        plannedDate={this.props.task.PlannedDate}
                        handleSave={this.handleSave}
                    />
                </TaskListItemBrief>

                <Toggler isVisible={this.state.isOpen}>
                    <TaskListItemExpanded>
                        <TaskListItemDetails
                            taskId={this.props.task.Id}
                            taskNotes={this.props.task.Notes}
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

    handleCompletionToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired
};

export default TaskListItem;
