import React from 'react';
import PropTypes from 'prop-types';

import './icon.scss';

const Icon = _props => {
    const { className, glyph, isFixedWidth, ...props } = _props;

    const classList = [
        'icon',
        'fa',
        `fa-${glyph}`,
        isFixedWidth ? 'fa-fw' : '',
        className
    ];

    return (
        <i
            className={classList.join(' ').trim()}
            aria-hidden="true"
            {...props}
        >
        </i>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    glyph: PropTypes.string.isRequired,
    isFixedWidth: PropTypes.bool
};

Icon.defaultProps = {
    className: '',
    isFixedWidth: false
};

export default Icon;
