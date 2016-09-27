import React from 'react';
import Icon from './icon';

class DownAngleIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="angle-down"
                handleClick={this.props.handleClick}
            />
        );
    }
}

DownAngleIcon.propTypes = {
    handleClick: React.PropTypes.func
};

export default DownAngleIcon;
