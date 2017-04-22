import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

import './checkbox.scss';

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.uniqueId = _.uniqueId();
        this.state = {
            checked: props.checked
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const label = document.getElementById(`label-${this.uniqueId}`);

        if (!this.state.checked) {
            label.classList.add('rotateIn');
        } else {
            label.classList.remove('rotateIn');
        }

        this.setState({
            checked: !this.state.checked
        });

        this.props.handleChange(event);
    }

    render() {
        return (
            <div className="checkbox">
                <input
                    type="checkbox"
                    id={`checkbox-${this.uniqueId}`}
                    checked={this.state.checked}
                    onChange={(event) => this.handleChange(event)}
                />
                <label
                    className="animated"
                    htmlFor={`checkbox-${this.uniqueId}`}
                    id={`label-${this.uniqueId}`}
                />
            </div>
        );
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    handleChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
    checked: false
};

export default Checkbox;
