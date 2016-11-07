import React from 'react';
import ActionIcon from './action-icon';

class PencilIcon extends React.Component {

    render() {
        return (
            <ActionIcon
                glyph="pencil"
                {...this.props}
            />
        );
    }
}

export default PencilIcon;
