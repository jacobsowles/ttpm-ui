import React from 'react';
import Icon from './icon';

class TimesIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="times"
                {...this.props}
            />
        );
    }
}

export default TimesIcon;
