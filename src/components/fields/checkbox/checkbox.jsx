import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

require('./checkbox.scss');

class Checkbox extends Component {

    constructor(props) {
        super(props);

        this.uniqueId = _.uniqueId();
        this.state = {
            checked: props.checked
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.checked = nextProps.checked;
    }

    handleChange(event) {
        const label = document.getElementById(`label-${this.uniqueId}`);

        if (!this.state.checked) {
            label.className = 'animated rotateIn';
        }

        this.setState({
            checked: !this.state.checked
        });

        this.props.handleChange(event);
    }

    render() {
        return (
            <div className="col-xs-1 no-horizontal-padding">
                <input
                    type="checkbox"
                    id={`checkbox-${this.uniqueId}`}
                    checked={this.state.checked}
                    onChange={(event) => this.handleChange(event)}
                />
                <label
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

Checkbox.getDefaultProps = {
    checked: false
};

export default Checkbox;
