import React from 'react';
import './task-group-filter-list.scss';

const TaskGroupFilterList = props => {
    return (
        <ul className="task-group-filter-list">
            {props.children}
        </ul>
    );
};

export default TaskGroupFilterList;
