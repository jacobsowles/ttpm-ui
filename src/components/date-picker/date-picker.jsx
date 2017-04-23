import React from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';

import Tooltip from 'components/tooltip';

import DateTime from 'utils/datetime';

import './date-picker.scss';

const DatePicker = ({ className, label, tooltip, ...props }) => {
    const classNames = [
        'date-picker',
        !props.date ? 'not-set' : '',
        tooltip ? 'with-tooltip' : '',
        className
    ];

    return (
        <div className={classNames.join(' ').trim()}>
            {
                label
                    ? <label data-tip={tooltip}>{label}</label>
                    : null
            }

            <SingleDatePicker
                displayFormat={DateTime.getDateFormat(props.date)}
                numberOfMonths={1}
                {...props}
            />

            <Tooltip />
        </div>
    );
};

// see https://github.com/airbnb/react-dates for core PropTypes
DatePicker.propTypes = {
    label: PropTypes.string,
    tooltip: PropTypes.string
};

export default DatePicker;
