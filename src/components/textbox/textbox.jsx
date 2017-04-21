import React, { Component, PropTypes } from 'react';
import './textbox.scss';

class Textbox extends Component {
    constructor(props) {
        super(props);

        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleBlur(event) {
        if (this.props.clearOnBlur) {
            this.props.handleChange('');
        }

        this.props.handleBlur(event);
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
                this.props.handleChange('');
                break;
            }

            case 'Enter': {
                event.target.blur();
                break;
            }
        }
    }

    render() {
        return (
            <input
                className={`textbox ${this.props.className}`.trim()}
                disabled={this.props.isDisabled ? 'disabled' : ''}
                id={this.props.id}
                placeholder={this.props.placeholder}
                style={this.props.style}
                type="text"
                value={this.props.value}
                onBlur={(event) => this.handleBlur(event)}
                onChange={(event) => this.props.handleChange(event.target.value)}
                onClick={(event) => this.props.handleClick(event.target.value)}
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}

Textbox.propTypes = {
    className: PropTypes.string,
    clearOnBlur: PropTypes.bool,
    id: PropTypes.string,
    isDisabled: PropTypes.bool,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleClick: PropTypes.func
};

Textbox.defaultProps = {
    className: '',
    clearOnBlur: false,
    id: '',
    isDisabled: false,
    placeholder: '',
    style: {},
    value: '',
    handleBlur: (event) => {},
    handleChange: (event) => {},
    handleClick: (event) => {}
};

export default Textbox;
