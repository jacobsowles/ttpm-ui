import React from 'react';
import Icon from './icon';

class DownAngleIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="angle-down"
                {...this.props}
            />
        );
    }
}

export default DownAngleIcon;
