import React from 'react';
import Icon from './icon';

class RightAngleIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="angle-right"
                {...this.props}
            />
        );
    }
}

export default RightAngleIcon;
