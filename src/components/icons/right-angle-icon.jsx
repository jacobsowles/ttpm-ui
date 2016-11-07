import React from 'react';
import ActionIcon from './action-icon';

class RightAngleIcon extends React.Component {

    render() {
        return (
            <ActionIcon
                glyph="angle-right"
                {...this.props}
            />
        );
    }
}

export default RightAngleIcon;
