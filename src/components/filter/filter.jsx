import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Icon from 'components/icon';

import './filter.scss';

const Filter = ({ taskGroupId, completion, iconGlyph, name }) => (
    <li className="filter">
        <NavLink
            to={{
                pathname: `/groups/${taskGroupId}`,
                query: {
                    completion
                }
            }}
            activeClassName="active"
        >
            {iconGlyph && <Icon glyph={iconGlyph} />}
            {name}
        </NavLink>
    </li>
);

Filter.propTypes = {
    completion: PropTypes.string,
    iconGlyph: PropTypes.string,
    name: PropTypes.string.isRequired,
    taskGroupId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Filter.defaultProps = {
    completion: 'incomplete',
    taskGroupId: 'all'
};

export default Filter;
