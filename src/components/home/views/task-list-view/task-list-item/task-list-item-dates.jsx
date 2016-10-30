import React, { Component, PropTypes } from 'react';
import DateBox from '~/fields/date-box';
import DueDateBox from '../due-date-box';

require('./task-list-item-dates.scss');

class TaskListItemDates extends Component {

    constructor(props) {
        super(props);

        this.handleDueDateSave = this.handleDueDateSave.bind(this);
        this.handlePlannedDateSave = this.handlePlannedDateSave.bind(this);
    }

    handlePlannedDateSave(date) {
        if (date != this.props.plannedDate) {
            this.props.handleSave({
                PlannedDate: date || ''
            });
        }
    }

    handleDueDateSave(date) {
        if (date != this.props.dueDate) {
            this.props.handleSave({
                DueDate: date || ''
            });
        }
    }

    render() {
        return (
            <div className="task-list-item-dates">
                {
                    this.props.complete
                    ? (
                        <DateBox
                            isDisabled={true}
                            label="c"
                            tooltip="completed date"
                            value={this.props.lastDateCompleted}
                        />
                    )
                    : (
                        <div>
                            <DateBox
                                className="planned"
                                label="p"
                                tooltip="planned date"
                                value={this.props.plannedDate}
                                handleChange={this.handlePlannedDateSave}
                            />

                            <DueDateBox
                                className="due"
                                label="d"
                                tooltip="due date"
                                value={this.props.dueDate}
                                handleChange={this.handleDueDateSave}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}

TaskListItemDates.propTypes = {
    complete: PropTypes.bool.isRequired,
    dueDate: PropTypes.string,
    lastDateCompleted: PropTypes.string,
    plannedDate: PropTypes.string,

    handleSave: PropTypes.func.isRequired
};

export default TaskListItemDates;
