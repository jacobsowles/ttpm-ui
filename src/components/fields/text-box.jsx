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
                value={this.state.value}
                onBlur={this.props.handleBlur}
                onChange={this.handleChange}
                onClick={this.props.handleClick}
            />
        );
    }
}

TextBox.propTypes = {
    value: React.PropTypes.string,
    handleBlur: React.PropTypes.func,
    handleChange: React.PropTypes.func,
    handleClick: React.PropTypes.func
};

TextBox.defaultProps = {
    value: '',
    handleBlur: (event) => {},
    handleChange: (event) => {},
    handleClick: (event) => {}
};

export default TextBox;
