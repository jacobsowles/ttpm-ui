import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'components/checkbox';
import DatePicker from 'components/date-picker';
import DropdownMenu from 'components/dropdown-menu';
import Icon from 'components/icon';
import TaskListItem from './task-list-item';
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
                            dueDate={task.dueDate}
                            id={task.id}
                            isComplete={task.isComplete}
                            key={task.id}
                            name={task.name}
                            plannedDate={task.plannedDate}
                        />
                    );
                })
            }
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        dueDate: PropTypes.string,
        id: PropTypes.number.isRequired,
        isComplete: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        plannedDate: PropTypes.string
    })).isRequired
};

export default TaskList;
