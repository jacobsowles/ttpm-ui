import React, { Component, PropTypes } from 'react';

class TextBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.keyDownHandlerOverwritten = this.keyDownHandlerOverwritten.bind(this);
    }

    keyDownHandlerOverwritten(key) {
        return this.props.keyDownHandlers.filter(handler => handler.key == key).length > 0;
    }

    handleBlur(event) {
        if (this.props.clearOnBlur) {
            this.setState({
                value: ''
            });
        }

        this.props.handleBlur(event);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });

        this.props.handleChange(event);
    }

    handleKeyDown(event) {
        this.props.keyDownHandlers.forEach((handler) => {
            if (event.key == handler.key) {
                handler.action(this.state.value);
            }
        });

        if (!this.keyDownHandlerOverwritten(event.key)) {
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
        }
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
                onBlur={(event) => this.handleBlur(event)}
                onChange={(event) => this.handleChange(event)}
                onClick={(event) => this.props.handleClick(event)}
                onKeyDown={this.handleKeyDown}
                disabled={this.props.isDisabled ? 'disabled' : ''}
            />
        );
    }
}

TextBox.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    clearOnBlur: PropTypes.bool,
    isDisabled: PropTypes.bool,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleClick: PropTypes.func,
    keyDownHandlers: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired
    }))
};

TextBox.defaultProps = {
    value: '',
    id: '',
    style: {},
    placeholder: '',
    clearOnBlur: false,
    isDisabled: false,
    handleBlur: (event) => {},
    handleChange: (event) => {},
    handleClick: (event) => {},
    keyDownHandlers: []
};

export default TextBox;
