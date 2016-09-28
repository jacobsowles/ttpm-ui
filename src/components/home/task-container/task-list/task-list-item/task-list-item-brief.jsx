// npm modules
import React from 'react';

// components
import DownAngleIcon from '~/icons/down-angle-icon';
import RightAngleIcon from '~/icons/right-angle-icon';
import TextBox from '~/fields/text-box/text-box';

class TaskListItemBrief extends React.Component {

    render() {
        return (
            <div className={`task-brief ${this.props.detailsAreVisible ? 'edit-mode' : ''}`}>
                <TextBox
                    value={this.props.taskName}
                    handleClick={this.props.handleNameClick}
                    handleBlur={this.props.handleNameSave}
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
    taskName: React.PropTypes.string.isRequired,
    detailsAreVisible: React.PropTypes.bool.isRequired,

    handleNameClick: React.PropTypes.func.isRequired,
    handleNameSave: React.PropTypes.func.isRequired,
    hideDetails: React.PropTypes.func.isRequired,
    showDetails: React.PropTypes.func.isRequired
};

export default TaskListItemBrief;
