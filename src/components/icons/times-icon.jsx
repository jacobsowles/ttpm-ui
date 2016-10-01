import React from 'react';
import Icon from './icon';

class TimesIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="times"
                handleClick={this.props.handleClick}
            />
        );
    }
}

TimesIcon.propTypes = {
    handleClick: React.PropTypes.func
};

export default TimesIcon;
