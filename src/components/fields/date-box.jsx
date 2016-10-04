import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import _ from 'underscore';

require('./date-box.scss');

class DateBox extends Component {

    constructor(props) {
        super(props);

        this.id = `datebox-${_.uniqueId()}`;
        this.state = {
            value: props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            value: date
        });

        this.props.handleChange(date);
    }

    render() {
        return (
            <div className="date-box">
                <label htmlFor={this.id}>{this.props.label}</label>
                <DatePicker
                    id={this.id}
                    dateFormat="MM/DD"
                    placeholderText={this.props.placeholder}
                    selected={this.state.value}
                    todayButton="Today"
                    disabled={this.props.isDisabled}
                    popoverAttachment="top right"
                    popoverTargetAttachment="bottom right"
                    popoverTargetOffset="10px 0px"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

DateBox.propTypes = {
    value: PropTypes.object,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isDisabled: PropTypes.bool,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleClick: PropTypes.func,
    keyDownHandlers: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired
    }))
};

DateBox.defaultProps = {
    label: '',
    placeholder: 'set date',
    isDisabled: false,
    handleChange: (event) => {}
};

export default DateBox;
