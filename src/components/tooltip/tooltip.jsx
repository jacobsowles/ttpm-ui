import React from 'react';
import ReactTooltip from 'react-tooltip';

import './tooltip.scss';

const Tooltip = props => (
    <ReactTooltip
        delayShow={250}
        {...props}
    />
);

export default Tooltip;
