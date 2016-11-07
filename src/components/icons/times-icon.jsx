import React from 'react';
import ActionIcon from './action-icon';

class TimesIcon extends React.Component {

    render() {
        return (
            <ActionIcon
                glyph="times"
                {...this.props}
            />
        );
    }
}

export default TimesIcon;
