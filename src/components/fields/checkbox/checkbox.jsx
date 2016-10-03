import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

require('./checkbox.scss');

class Checkbox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.checked = nextProps.checked;
    }

    handleChange(event) {
        this.setState({
            checked: !this.state.checked
        });

        this.props.handleChange(event);
    }

    render() {
        const uniqueId = 'checkbox' + _.uniqueId();

        return (
            <span>
                <input
                    type="checkbox"
                    id={uniqueId}
                    checked={this.state.checked}
                    onChange={(event) => this.handleChange(event)}
                />
                <label
                    htmlFor={uniqueId}
                    className={`${this.state.checked ? 'animated rotateIn' : ''}`}
                />
            </span>
        );
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    handleChange: PropTypes.func.isRequired
};

Checkbox.getDefaultProps = {
    checked: false
};

export default Checkbox;
