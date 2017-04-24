import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Icon from 'components/icon';

import './filter.scss';

const Filter = ({taskGroupId, completion, iconGlyph, name}) => {
    return (
        <li className="filter">
            <Link
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
            </Link>
        </li>
    );
};

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
