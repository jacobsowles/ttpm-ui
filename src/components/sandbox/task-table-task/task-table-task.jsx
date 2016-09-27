// npm modules
import React from 'react';

// components
import DownAngleIcon from '~/icons/down-angle-icon';
import RightAngleIcon from '~/icons/right-angle-icon';
import TaskTableTaskDetails from './task-table-task-details';
import TextBox from '~/fields/text-box';
import Toggler from '../toggler/toggler';

// styles
require('./task-table-task.scss');

class TaskTableTask extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            detailsAreVisible: false
        };

        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);

        this.handleNameSave = this.handleNameSave.bind(this);
        this.handleNotesSave = this.handleNotesSave.bind(this);
    }

    handleNameClick() {
        this.setState({
            detailsAreVisible: true
        });
    }

    handleDeleteClick() {
        this.setState({
            detailsAreVisible: false
        });
    }

    handleNameSave(event) {
        console.log('new name: ' + event.target.value);
    }

    handleNotesSave(event) {
        console.log('new notes: ' + event.target.value);
    }

    render() {
        return (
            <div className="task-table-task">
                <div className="task-name" onClick={() => this.handleNameClick()}>
                    <TextBox
                        value={this.props.task.Name}
                        onBlur={this.handleNameSave}
                    />
                    {this.state.detailsAreVisible ? <DownAngleIcon /> : <RightAngleIcon />}
                </div>

                <Toggler isVisible={this.state.detailsAreVisible}>
                    <TaskTableTaskDetails
                        taskNotes={this.props.task.Notes}
                        handleDeleteClick={this.handleDeleteClick}
                        handleNotesSave={this.handleNotesSave}
                    />
                </Toggler>
            </div>
        );
    }
}

TaskTableTask.propTypes = {
    task: React.PropTypes.shape({
        Name: React.PropTypes.string.isRequired,
        Notes: React.PropTypes.string,
        Complete: React.PropTypes.bool.isRequired
    }).isRequired
};

export default TaskTableTask;
