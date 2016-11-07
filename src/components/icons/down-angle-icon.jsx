import React from 'react';
import ActionIcon from './action-icon';

class DownAngleIcon extends React.Component {

    render() {
        return (
            <ActionIcon
                glyph="angle-down"
                {...this.props}
            />
        );
    }
}

export default DownAngleIcon;
