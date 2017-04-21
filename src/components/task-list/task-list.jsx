import React, { Component, PropTypes } from 'react';

import Checkbox from 'components/checkbox';
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

const TaskListItem = props => {
    return (
        <li className="task-list-item">
            <Checkbox checked={props.isComplete} />
            <Textbox
                className="incognito task-title"
                value={props.name}
            />
        </li>
    );
};

TaskListItem.propTypes = taskShape;

const taskShape = {
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default TaskList;
