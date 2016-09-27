import React from 'react';
import Icon from './icon';

class UpAngleIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="angle-up"
                handleClick={this.props.handleClick}
            />
        );
    }
}

UpAngleIcon.propTypes = {
    handleClick: React.PropTypes.func
};

export default UpAngleIcon;
