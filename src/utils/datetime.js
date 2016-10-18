import moment from 'moment';

const DateTime = class DateTime {};

DateTime.today = () => {
    return moment();
};

DateTime.getMoment = (date1) => {
    return moment.isMoment(date1) ? date1 : moment(date1);
};

DateTime.isBefore = (date1, date2) => {
    return DateTime.getMoment(date1).isBefore(DateTime.getMoment(date2), 'day');
};

DateTime.isSame = (date1, date2) => {
    return DateTime.getMoment(date1).isSame(DateTime.getMoment(date2), 'day');
};

DateTime.isAfter = (date1, date2) => {
    return DateTime.getMoment(date1).isAfter(DateTime.getMoment(date2), 'day');
};

DateTime.isBeforeOrSame = (date1, date2) => {
    return DateTime.isBefore(date1, date2) || DateTime.isSame(date1, date2);
};

DateTime.isAfterOrSame = (date1, date2) => {
    return DateTime.isAfter(date1, date2) || DateTime.isSame(date1, date2);
};

export default DateTime;
