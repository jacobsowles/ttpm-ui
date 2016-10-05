// npm modules
import React, { Component, PropTypes } from 'react';
import Flexbox from 'flexbox-react';

// components
import DateBox from '~/fields/date-box';
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
                task-brief
                ${this.props.isOpen ? 'edit-mode' : ''}
                ${this.props.complete ? 'task-complete' : ''}
            `}>
                <Flexbox flexDirection="row">
                    <Flexbox
                        flexGrow={1}
                        className="task-name"
                    >
                        <TextBox
                            isDisabled={this.props.complete}
                            value={this.props.name}
                            handleClick={this.handleNameClick}
                            handleBlur={this.handleNameSave}
                        />
                    </Flexbox>

                    {
                        this.props.complete
                            ? (
                                <Flexbox>
                                    <DateBox
                                        label="completed"
                                        value={this.props.lastDateCompleted}
                                        isDisabled={true}
                                    />
                                </Flexbox>
                            )
                            : (
                                <Flexbox>
                                    <Flexbox>
                                        <DateBox
                                            label="planned for"
                                            value={this.props.plannedDate}
                                            handleChange={this.handlePlannedDateSave}
                                        />
                                    </Flexbox>

                                    <Flexbox>
                                        <DateBox
                                            label="due"
                                            value={this.props.dueDate}
                                            handleChange={this.handleDueDateSave}
                                        />
                                    </Flexbox>
                                </Flexbox>
                            )
                    }

                    <Flexbox>
                        {
                            this.props.isOpen
                                ? <DownAngleIcon handleClick={(event) => this.props.hideDetails(this.props.id, event)} />
                                : <RightAngleIcon handleClick={(event) => this.props.showDetails(this.props.id, event)} />
                        }
                    </Flexbox>
                </Flexbox>
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
