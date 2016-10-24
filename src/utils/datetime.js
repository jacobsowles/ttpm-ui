import moment from 'moment';

const DateTime = class DateTime {};

DateTime.today = () => {
    return moment();
};

DateTime.tomorrow = () => {
    return moment().add(1, 'days');
};

DateTime.yesterday = () => {
    return moment().subtract(1, 'days');
};

DateTime.getMoment = (date1) => {
    return date1
        ? moment.isMoment(date1) ? date1 : moment(date1)
        : null;
};

DateTime.isBefore = (date1, date2) => {
    date1 = DateTime.getMoment(date1);
    return date1
        ? date1.isBefore(DateTime.getMoment(date2), 'day')
        : false;
};

DateTime.isSame = (date1, date2) => {
    date1 = DateTime.getMoment(date1);
    return date1
        ? date1.isSame(DateTime.getMoment(date2), 'day')
        : false;
};

DateTime.isAfter = (date1, date2) => {
    date1 = DateTime.getMoment(date1);
    return date1
        ? date1.isAfter(DateTime.getMoment(date2), 'day')
        : false;
};

DateTime.isBeforeOrSame = (date1, date2) => {
    return DateTime.isBefore(date1, date2) || DateTime.isSame(date1, date2);
};

DateTime.isAfterOrSame = (date1, date2) => {
    return DateTime.isAfter(date1, date2) || DateTime.isSame(date1, date2);
};

export default DateTime;
