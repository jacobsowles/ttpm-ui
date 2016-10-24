// npm modules
import React, { Component, PropTypes } from 'react';

// components
// import Checkbox from '~/fields/checkbox/checkbox';
import DateBox from '~/fields/date-box';
import DueDateBox from '../due-date-box';
import DownAngleIcon from '~/icons/down-angle-icon';
import RightAngleIcon from '~/icons/right-angle-icon';
import TextBox from '~/fields/text-box';

class TaskListItemBrief extends Component {

    constructor(props) {
        super(props);

        this.handleDueDateSave = this.handleDueDateSave.bind(this);
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleNameSave = this.handleNameSave.bind(this);
        this.handlePlannedDateSave = this.handlePlannedDateSave.bind(this);
    }

    handleNameClick(event) {
        if (!this.props.isOpen) {
            this.props.handleNameClick(this.props.id, event);
        }
    }

    handleNameSave(event) {
        if (event.target.value != this.props.name) {
            this.props.handleSave(this.props.id, {
                Name: event.target.value
            });
        }
    }

    handlePlannedDateSave(date) {
        if (date != this.props.plannedDate) {
            this.props.handleSave(this.props.id, {
                PlannedDate: date || ''
            });
        }
    }

    handleDueDateSave(date) {
        if (date != this.props.dueDate) {
            this.props.handleSave(this.props.id, {
                DueDate: date || ''
            });
        }
    }

    render() {
        return (
            <div className={`
                task-brief col-xs-11 no-horizontal-padding
                ${this.props.isOpen ? 'edit-mode' : ''}
                ${this.props.complete ? 'task-complete' : ''}
            `}>
                <div className="col-xs-11 col-sm-7 col-sm-8 no-horizontal-padding">
                    <TextBox
                        isDisabled={this.props.complete}
                        value={this.props.name}
                        handleClick={this.handleNameClick}
                        handleBlur={this.handleNameSave}
                    />
                </div>

                <div className="col-xs-1 col-sm-push-4 col-md-push-3 no-right-padding">
                    {
                        this.props.isOpen
                        ? <DownAngleIcon className="angle-icon" handleClick={(event) => this.props.hideDetails(this.props.id, event)} />
                        : <RightAngleIcon className="angle-icon" handleClick={(event) => this.props.showDetails(this.props.id, event)} />
                    }
                </div>

                <div className="col-xs-12 col-sm-4 col-sm-pull-1 col-md-3 no-horizontal-padding">
                    {
                        this.props.complete
                        ? (
                            <div className="col-xs-5 col-sm-6">
                                <DateBox
                                    label="completed"
                                    value={this.props.lastDateCompleted}
                                    contextColorsEnabled={false}
                                    isDisabled={true}
                                    />
                            </div>
                        )
                        : (
                            <div>
                                <DateBox
                                    className="planned col-xs-5 col-sm-6"
                                    label="planned for"
                                    value={this.props.plannedDate}
                                    handleChange={this.handlePlannedDateSave}
                                />

                                <DueDateBox
                                    className="due col-xs-5 col-xs-offset-1 col-sm-6"
                                    label="due"
                                    value={this.props.dueDate}
                                    handleChange={this.handleDueDateSave}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

TaskListItemBrief.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    lastDateCompleted: PropTypes.string,
    plannedDate: PropTypes.string,
    dueDate: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,

    handleNameClick: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    hideDetails: PropTypes.func.isRequired,
    showDetails: PropTypes.func.isRequired
};

export default TaskListItemBrief;
