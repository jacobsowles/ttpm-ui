// npm modules
import React from 'react';

class Icon extends React.Component {

    render() {
        return (
            <i className={`fa fa-${this.props.glyph}`} />
        );
    }
}

Icon.propTypes = {
    glyph: React.PropTypes.string.isRequired
};

export default Icon;
