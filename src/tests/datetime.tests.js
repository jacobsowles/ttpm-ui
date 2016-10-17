import moment from 'moment';
import datetime from '@/utils/datetime';

(function() {
    describe('getMoment', () => {
        it('should turn date string into moment object', () => {
            givenFirstDateString('1/1/2016');
            expect(moment.isMoment(datetime.getMoment(_date1))).toBe(true);
        });

        it('should return moment object if argument already moment object', () => {
            givenFirstMoment('1/1/2016');
            expect(moment.isMoment(datetime.getMoment(_date1))).toBe(true);
        });
    });

    describe('isBefore', () => {
        it('should return true if day of first date comes before day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isBefore(_date1, _date2)).toBe(true);
        });

        it('should return false if day of first date is same as day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/1/2016');
            expect(datetime.isBefore(_date1, _date2)).toBe(false);
        });

        it('should return false if day of first date comes after day of second date', () => {
            givenFirstMoment('1/3/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isBefore(_date1, _date2)).toBe(false);
        });

        it('should compare absolute day, not day of month', () => {
            givenFirstMoment('1/2/2016');
            givenSecondMoment('2/1/2016');
            expect(datetime.isBefore(_date1, _date2)).toBe(true);
        });

        it('should compare absolute day, not day of year', () => {
            givenFirstMoment('1/2/2016');
            givenSecondMoment('1/2/2017');
            expect(datetime.isBefore(_date1, _date2)).toBe(true);
        });

        it('should accept date strings', () => {
            givenFirstDateString('1/1/2016');
            givenSecondDateString('1/2/2016');
            expect(datetime.isBefore(_date1, _date2)).toBe(true);
        });
    });

    describe('isSame', () => {
        it('should return true if day of first date is same as day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/1/2016');
            expect(datetime.isSame(_date1, _date2)).toBe(true);
        });

        it('should return false if day of first date comes before day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isSame(_date1, _date2)).toBe(false);
        });

        it('should return false if day of first date comes after day of second date', () => {
            givenFirstMoment('1/3/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isSame(_date1, _date2)).toBe(false);
        });
    });

    describe('isAfter', () => {
        it('should return true if day of first date comes after day of second date', () => {
            givenFirstMoment('1/3/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isAfter(_date1, _date2)).toBe(true);
        });

        it('should return false if day of first date is same as day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/1/2016');
            expect(datetime.isAfter(_date1, _date2)).toBe(false);
        });

        it('should return false if day of first date comes before day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isAfter(_date1, _date2)).toBe(false);
        });
    });

    describe('isBeforeOrSame', () => {
        it('should return true if day of first date comes before day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isBeforeOrSame(_date1, _date2)).toBe(true);
        });

        it('should return true if day of first date is same as day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/1/2016');
            expect(datetime.isBeforeOrSame(_date1, _date2)).toBe(true);
        });

        it('should return false if day of first date comes after day of second date', () => {
            givenFirstMoment('1/3/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isBeforeOrSame(_date1, _date2)).toBe(false);
        });
    });

    describe('isAfterOrSame', () => {
        it('should return true if day of first date comes after day of second date', () => {
            givenFirstMoment('1/3/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isAfterOrSame(_date1, _date2)).toBe(true);
        });

        it('should return true if day of first date is same as day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/1/2016');
            expect(datetime.isAfterOrSame(_date1, _date2)).toBe(true);
        });

        it('should return false if day of first date comes before day of second date', () => {
            givenFirstMoment('1/1/2016');
            givenSecondMoment('1/2/2016');
            expect(datetime.isAfterOrSame(_date1, _date2)).toBe(false);
        });
    });

    //// Test Helpers ////

    const _dateFormat = 'MM/DD/YYYY';

    let _date1;
    let _date2;

    function givenFirstDateString(dateString) {
        _date1 = dateString;
    }

    function givenSecondDateString(dateString) {
        _date2 = dateString;
    }

    function givenFirstMoment(date) {
        _date1 = moment(date, _dateFormat);
    }

    function givenSecondMoment(date) {
        _date2 = moment(date, _dateFormat);
    }
})();
