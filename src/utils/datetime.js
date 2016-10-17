import moment from 'moment';

module.exports = {
    getMoment(date1) {
        return moment.isMoment(date1) ? date1 : moment(date1, 'MM/DD/YYYY');
    },

    isBefore(date1, date2) {
        return this.getMoment(date1).isBefore(this.getMoment(date2), 'day');
    },

    isSame(date1, date2) {
        return this.getMoment(date1).isSame(this.getMoment(date2), 'day');
    },

    isAfter(date1, date2) {
        return this.getMoment(date1).isAfter(this.getMoment(date2), 'day');
    },

    isBeforeOrSame(date1, date2) {
        return this.isBefore(date1, date2) || this.isSame(date1, date2);
    },

    isAfterOrSame(date1, date2) {
        return this.isAfter(date1, date2) || this.isSame(date1, date2);
    }
};
