import React, { Component, PropTypes } from 'react';

import Checkbox from 'components/checkbox';
import DropdownMenu from 'components/dropdown-menu';
import Icon from 'components/icon';
import Textbox from 'components/textbox';

import './task-list.scss';

const TaskList = props => {
    return (
        <ul className="task-list">
            {
                props.tasks.map(task => {
                    return (
                        <TaskListItem
                            description={task.description}
                            id={task.id}
                            isComplete={task.isComplete}
                            key={task.id}
                            name={task.name}
                        />
                    );
                })
            }
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape(taskShape)).isRequired
};

// Private Components

class TaskListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
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
                    toggle={<Icon glyph="ellipsis-h" onClick={this.toggle} />}
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
            </li>
        );
    }
}

TaskListItem.propTypes = taskShape;

const taskShape = {
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default TaskList;
