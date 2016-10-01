import React from 'react';
import Icon from './icon';

class LeftAngleIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="angle-left"
                {...this.props}
            />
        );
    }
}

export default LeftAngleIcon;
