import React from 'react';
import Icon from './icon';

class RightAngleIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="angle-right"
                handleClick={this.props.handleClick}
            />
        );
    }
}

RightAngleIcon.propTypes = {
    handleClick: React.PropTypes.func
};

export default RightAngleIcon;
