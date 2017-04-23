import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'components/checkbox';
import DatePicker from 'components/date-picker';
import DropdownMenu from 'components/dropdown-menu';
import Icon from 'components/icon';
import Textbox from 'components/textbox';

import './task-list-item.scss';

class TaskListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dueDate: props.dueDate,
            isDueDateFocused: false,
            isOpen: false,
            isPlannedDateFocused: false,
            plannedDate: props.plannedDate
        };

        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    close() {
        this.setState({
            isOpen: false
        });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <li className={`task-list-item ${this.props.isComplete ? 'complete' : ''}`.trim()}>
                <Checkbox checked={this.props.isComplete} />

                <Textbox
                    className="incognito task-title"
                    value={this.props.name}
                />

                <DropdownMenu
                    isOpen={this.state.isOpen}
                    close={this.close}
                    toggle={<Icon glyph="ellipsis-h" tooltip="actions" onClick={this.toggle} />}
                    align="right"
                >
                    <li>
                        <a href="#" title="task details">
                            <Icon glyph="file-text-o" isFixedWidth={true} />
                            Details
                        </a>
                    </li>
                    <li className="separator" role="separator"></li>
                    <li>
                        <a href="#" title="archive task">
                            <Icon glyph="archive" isFixedWidth={true} />
                            Archive
                        </a>
                    </li>
                    <li>
                        <a href="#" className="danger" title="delete task">
                            <Icon glyph="trash-o" isFixedWidth={true} />
                            Delete
                        </a>
                    </li>
                </DropdownMenu>

                <div className="date-wrapper">
                    <DatePicker
                        anchorDirection="right"
                        className="planned-date-picker"
                        date={this.state.plannedDate}
                        focused={this.state.isPlannedDateFocused}
                        label="p"
                        onDateChange={date => this.setState({ plannedDate: date })}
                        onFocusChange={({ focused }) => this.setState({ isPlannedDateFocused: focused })}
                        placeholder="none"
                        tooltip="planned date"
                    />

                    <DatePicker
                        anchorDirection="right"
                        className="due-date-picker"
                        date={this.state.dueDate}
                        focused={this.state.isDueDateFocused}
                        label="d"
                        onDateChange={date => this.setState({ dueDate: date })}
                        onFocusChange={({ focused }) => this.setState({ isDueDateFocused: focused })}
                        placeholder="none"
                        tooltip="due date"
                    />
                </div>
            </li>
        );
    }
}

TaskListItem.propTypes = {
    description: PropTypes.string,
    dueDate: PropTypes.string,
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    plannedDate: PropTypes.string
};

export default TaskListItem;
