import React from 'react';
import Icon from './icon';

class PencilIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="pencil"
                handleClick={this.props.handleClick}
            />
        );
    }
}

PencilIcon.propTypes = {
    handleClick: React.PropTypes.func
};

export default PencilIcon;
