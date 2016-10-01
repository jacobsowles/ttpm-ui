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

    constructor(props) {
        super(props);

        this.state = {
            detailsAreVisible: false
        };

        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleTaskSave = this.handleTaskSave.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }

    handleNameClick() {
        this.showDetails();
    }

    handleTaskDelete(event) {
        this.hideDetails();
        this.props.handleTaskDelete(event);
    }

    handleTaskSave(taskId, task) {
        this.props.handleTaskSave(taskId, task);
    }

    hideDetails() {
        this.setState({
            detailsAreVisible: false
        });
    }

    showDetails() {
        this.setState({
            detailsAreVisible: true
        });
    }

    render() {
        const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
        const opacity = isDragging ? 0 : 1;

        return (
            <div className="task-list-item">
                <Checkbox
                    checked={this.props.task.Complete}
                    includeWithChange={this.props.task}
                    handleChange={this.props.handleCompletionToggle}
                />

                <TaskListItemBrief
                    taskId={this.props.task.Id}
                    taskName={this.props.task.Name}
                    taskComplete={this.props.task.Complete}
                    detailsAreVisible={this.state.detailsAreVisible}
                    handleNameClick={this.handleNameClick}
                    handleNameSave={this.handleTaskSave}
                    hideDetails={this.hideDetails}
                    showDetails={this.showDetails}
                />

                <Toggler isVisible={this.state.detailsAreVisible}>
                    <TaskListItemDetails
                        taskId={this.props.task.Id}
                        taskNotes={this.props.task.Notes}
                        handleTaskDelete={this.handleTaskDelete}
                        handleNotesSave={this.handleTaskSave}
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

    handleCompletionToggle: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired,
    handleTaskSave: PropTypes.func.isRequired
};

export default TaskListItem;
