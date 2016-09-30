// npm modules
import React from 'react';

class TextBox extends React.Component {

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
            <input
                type="text"
                className="form-control"
                placeholder={this.props.placeholder}
                value={this.state.value}
                onBlur={(event) => this.props.handleBlur(event)}
                onChange={(event) => this.handleChange(event)}
                onClick={(event) => this.props.handleClick(event)}
                onKeyDown={(event) => this.props.handleKeyDown(event)}
            />
        );
    }
}

TextBox.propTypes = {
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    handleBlur: React.PropTypes.func,
    handleChange: React.PropTypes.func,
    handleClick: React.PropTypes.func,
    handleKeyDown: React.PropTypes.func
};

TextBox.defaultProps = {
    value: '',
    placeholder: '',
    handleBlur: (event) => {},
    handleChange: (event) => {},
    handleClick: (event) => {},
    handleKeyDown: (event) => {}
};

export default TextBox;
