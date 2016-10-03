// npm modules
import React, { Component, PropTypes } from 'react';

// components
import DownAngleIcon from '~/icons/down-angle-icon';
import RightAngleIcon from '~/icons/right-angle-icon';
import TextBox from '~/fields/text-box';

class TaskListItemBrief extends Component {

    constructor(props) {
        super(props);

        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleNameSave = this.handleNameSave.bind(this);
    }

    handleNameClick(event) {
        if (!this.props.isOpen) {
            this.props.handleNameClick(this.props.taskId, event);
        }
    }

    handleNameSave(event) {
        if (event.target.value != this.props.taskName) {
            this.props.handleNameSave(this.props.taskId, {
                Name: event.target.value
            });
        }
    }

    render() {
        return (
            <div className={`
                task-brief
                ${this.props.isOpen ? 'edit-mode' : ''}
                ${this.props.taskComplete ? 'task-complete' : ''}
            `}>
                <TextBox
                    isDisabled={this.props.taskComplete}
                    value={this.props.taskName}
                    handleClick={this.handleNameClick}
                    handleBlur={this.handleNameSave}
                />

                {
                    this.props.isOpen
                        ? <DownAngleIcon handleClick={(event) => this.props.hideDetails(this.props.taskId, event)} />
                        : <RightAngleIcon handleClick={(event) => this.props.showDetails(this.props.taskId, event)} />
                }
            </div>
        );
    }
}

TaskListItemBrief.propTypes = {
    taskId: PropTypes.number.isRequired,
    taskName: PropTypes.string.isRequired,
    taskComplete: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,

    handleNameClick: PropTypes.func.isRequired,
    handleNameSave: PropTypes.func.isRequired,
    hideDetails: PropTypes.func.isRequired,
    showDetails: PropTypes.func.isRequired
};

export default TaskListItemBrief;
