import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './task-group-filter.scss';

const TaskGroupFilter = props => {
    return (
        <li>
            <Link to={`/groups/${props.id}`} activeClassName="active">
                {props.name}
            </Link>
        </li>
    );
};

TaskGroupFilter.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default TaskGroupFilter;
