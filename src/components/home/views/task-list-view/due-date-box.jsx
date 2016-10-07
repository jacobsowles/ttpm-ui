import React, { Component, PropTypes } from 'react';
import DateBox from '~/fields/date-box';
import moment from 'moment';

require('./due-date-box.scss');

class DueDateBox extends Component {

    constructor(props) {
        super(props);
        this.isDue = moment(props.value).date() <= moment().date();
    }

    render() {
        return (
            <DateBox
                className={this.isDue ? 'due' : ''}
                {...this.props}
            />
        );
    }
}

DueDateBox.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isDisabled: PropTypes.bool,
    handleChange: PropTypes.func
};

export default DueDateBox;
