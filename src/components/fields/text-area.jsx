import React from 'react';
require('./text-area.scss');

class TextArea extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });

        this.props.handleChange(event);
    }

    render() {
        return (
            <textarea
                className="form-control"
                value={this.state.value || ''}
                onBlur={(event) => this.props.handleBlur(event)}
                onChange={(event) => this.handleChange(event)}
                onClick={(event) => this.props.handleClick(event)}
                onKeyDown={(event) => this.props.handleKeyDown(event)}
            />
        );
    }
}

TextArea.propTypes = {
    value: React.PropTypes.string,
    handleBlur: React.PropTypes.func,
    handleChange: React.PropTypes.func,
    handleClick: React.PropTypes.func,
    handleKeyDown: React.PropTypes.func
};

TextArea.defaultProps = {
    value: '',
    handleBlur: (event) => {},
    handleChange: (event) => {},
    handleClick: (event) => {},
    handleKeyDown: (event) => {}
};

export default TextArea;
