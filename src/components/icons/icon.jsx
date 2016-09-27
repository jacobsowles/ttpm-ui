import React from 'react';

class Icon extends React.Component {

    render() {
        return (
            <i
                className={`fa fa-${this.props.glyph}`}
                onClick={this.props.handleClick}
            />
        );
    }
}

Icon.propTypes = {
    glyph: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func
};

export default Icon;
