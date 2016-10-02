// npm modules
import React, { Component, PropTypes } from 'react';

class TextBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });

        this.props.handleChange(event);
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
                this.setState({
                    value: this.props.value
                });
                break;
            }

            case 'Enter': {
                event.target.blur();
                break;
            }
        }

        this.props.handleKeyDown(event);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control"
                id={this.props.id}
                style={this.props.style}
                placeholder={this.props.placeholder}
                value={this.state.value}
                onBlur={(event) => this.props.handleBlur(event)}
                onChange={(event) => this.handleChange(event)}
                onClick={(event) => this.props.handleClick(event)}
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}

TextBox.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleClick: PropTypes.func,
    handleKeyDown: PropTypes.func
};

TextBox.defaultProps = {
    value: '',
    id: '',
    style: {},
    placeholder: '',
    handleBlur: (event) => {},
    handleChange: (event) => {},
    handleClick: (event) => {},
    handleKeyDown: (event) => {}
};

export default TextBox;
