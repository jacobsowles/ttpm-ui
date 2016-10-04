import React from 'react';
import Icon from './icon';

class CheckmarkIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="check"
                {...this.props}
            />
        );
    }
}

export default CheckmarkIcon;
