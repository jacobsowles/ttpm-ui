import React from 'react';
import Icon from './icon';

class CheckmarkIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="check"
                handleClick={this.props.handleClick}
            />
        );
    }
}

CheckmarkIcon.propTypes = {
    handleClick: React.PropTypes.func
};

export default CheckmarkIcon;
