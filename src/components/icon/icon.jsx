import React, { PropTypes } from 'react';
import './icon.scss';

const Icon = (props) => {
    const { className, glyph, isFixedWidth, ..._props } = props;

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
            {..._props}
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
