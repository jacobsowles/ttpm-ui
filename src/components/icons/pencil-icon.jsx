import React from 'react';
import Icon from './icon';

class PencilIcon extends React.Component {

    render() {
        return (
            <Icon
                glyph="pencil"
                {...this.props}
            />
        );
    }
}

export default PencilIcon;
