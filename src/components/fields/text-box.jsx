// npm modules
import React from 'react';

class TextBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });

        this.props.onChange(event);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control"
                value={this.state.value}
                onBlur={this.props.onBlur}
                onChange={this.onChange}
            />
        );
    }
}

TextBox.propTypes = {
    value: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func
};

TextBox.defaultProps = {
    value: '',
    onBlur: (event) => {},
    onChange: (event) => {}
};

export default TextBox;
