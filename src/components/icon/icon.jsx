import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from 'components/tooltip';

import './icon.scss';

const Icon = ({ className, glyph, isFixedWidth, tooltip, ...props }) => {
    const classNames = [
        'icon',
        'fa',
        `fa-${glyph}`,
        isFixedWidth ? 'fa-fw' : '',
        className
    ];

    return (
        <span>
            <i
                className={classNames.join(' ').trim()}
                aria-hidden="true"
                data-tip={tooltip}
                {...props}
            />

            {tooltip && <Tooltip />}
        </span>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    glyph: PropTypes.string.isRequired,
    isFixedWidth: PropTypes.bool,
    tooltip: PropTypes.string
};

Icon.defaultProps = {
    className: '',
    isFixedWidth: false
};

export default Icon;
