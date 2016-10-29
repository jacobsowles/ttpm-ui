import React, { Component, PropTypes } from 'react';
import DateBox from '~/fields/date-box';
import DueDateBox from '../due-date-box';

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
            <div className="col-xs-12 col-sm-4 col-sm-pull-1 col-md-3 no-horizontal-padding">
                {
                    this.props.lastDateCompleted
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
        );
    }
}

TaskListItemDates.propTypes = {
    dueDate: PropTypes.string,
    lastDateCompleted: PropTypes.string,
    plannedDate: PropTypes.string,
    handleSave: PropTypes.func.isRequired
};

export default TaskListItemDates;
