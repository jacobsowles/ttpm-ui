import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import _ from 'underscore';

require('./date-box.scss');

class DateBox extends Component {

    constructor(props) {
        super(props);

        this.id = `datebox-${_.uniqueId()}`;
        this.isDue = moment(props.value).date() <= moment().date();

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
            <div className={`date-box ${this.props.contextColorsEnabled && this.isDue ? 'due' : ''}`}>
                <label htmlFor={this.id}>{this.props.label}</label>
                <DatePicker
                    id={this.id}
                    dateFormat="MM/DD"
                    placeholderText={this.props.placeholder}
                    selected={this.state.value ? moment(this.state.value) : null}
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
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isDisabled: PropTypes.bool,
    contextColorsEnabled: PropTypes.bool,
    handleChange: PropTypes.func
};

DateBox.defaultProps = {
    label: '',
    placeholder: 'set date',
    isDisabled: false,
    contextColorsEnabled: true,
    handleChange: () => {}
};

export default DateBox;
