import moment from 'moment';

export default class DateTime {
    static today = () => {
        return moment();
    }

    static tomorrow = () => {
        return moment().add(1, 'days');
    }

    static yesterday = () => {
        return moment().subtract(1, 'days');
    }

    static getMoment = (date1) => {
        return date1
            ? moment.isMoment(date1) ? date1 : moment(date1)
            : null;
    }

    static isBefore = (date1, date2) => {
        date1 = DateTime.getMoment(date1);
        return date1
            ? date1.isBefore(DateTime.getMoment(date2), 'day')
            : false;
    }

    static isSame = (date1, date2) => {
        date1 = DateTime.getMoment(date1);
        return date1
            ? date1.isSame(DateTime.getMoment(date2), 'day')
            : false;
    }

    static isAfter = (date1, date2) => {
        date1 = DateTime.getMoment(date1);
        return date1
            ? date1.isAfter(DateTime.getMoment(date2), 'day')
            : false;
    }

    static isBeforeOrSame = (date1, date2) => {
        return DateTime.isBefore(date1, date2) || DateTime.isSame(date1, date2);
    }

    static isAfterOrSame = (date1, date2) => {
        return DateTime.isAfter(date1, date2) || DateTime.isSame(date1, date2);
    }
}
