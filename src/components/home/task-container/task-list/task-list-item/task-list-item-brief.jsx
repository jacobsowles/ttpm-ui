// npm modules
import React, { Component, PropTypes } from 'react';

// components
import DownAngleIcon from '~/icons/down-angle-icon';
import RightAngleIcon from '~/icons/right-angle-icon';
import TextBox from '~/fields/text-box/text-box';

class TaskListItemBrief extends Component {

    constructor(props) {
        super(props);
        this.handleNameSave = this.handleNameSave.bind(this);
    }

    handleNameSave(event) {
        this.props.handleNameSave(this.props.taskId, {
            Name: event.target.value
        });
    }

    render() {
        return (
            <div className={`
                task-brief
                ${this.props.detailsAreVisible ? 'edit-mode' : ''}
                ${this.props.taskComplete ? 'task-complete' : ''}
            `}>
                <TextBox
                    value={this.props.taskName}
                    handleClick={this.props.handleNameClick}
                    handleBlur={this.handleNameSave}
                />

                {
                    this.props.detailsAreVisible
                        ? <DownAngleIcon handleClick={this.props.hideDetails} />
                        : <RightAngleIcon handleClick={this.props.showDetails} />
                }
            </div>
        );
    }
}

TaskListItemBrief.propTypes = {
    taskId: PropTypes.number.isRequired,
    taskName: PropTypes.string.isRequired,
    taskComplete: PropTypes.bool.isRequired,
    detailsAreVisible: PropTypes.bool.isRequired,

    handleNameClick: PropTypes.func.isRequired,
    handleNameSave: PropTypes.func.isRequired,
    hideDetails: PropTypes.func.isRequired,
    showDetails: PropTypes.func.isRequired
};

export default TaskListItemBrief;
