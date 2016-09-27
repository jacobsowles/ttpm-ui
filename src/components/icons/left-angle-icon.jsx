import React from 'react';
import Icon from './icon';

class LeftAngleIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="angle-left"
                handleClick={this.props.handleClick}
            />
        );
    }
}

LeftAngleIcon.propTypes = {
    handleClick: React.PropTypes.func
};

export default LeftAngleIcon;
