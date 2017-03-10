import { groupBy } from './linq';

describe('Linq Utils', () => {
    it('should group data into an array of objects with date key and array of object values', () => {
        const data = [
            {date: '1/1/2016', value: 1},
            {date: '1/1/2016', value: 2},
            {date: '1/2/2016', value: 4},
            {date: '1/1/2016', value: 3},
            {date: '1/2/2016', value: 5}
        ];

        const expectedResult = [
            {
                key: '1/1/2016',
                values: [
                    {date: '1/1/2016', value: 1},
                    {date: '1/1/2016', value: 2},
                    {date: '1/1/2016', value: 3}
                ]
            },
            {
                key: '1/2/2016',
                values: [
                    {date: '1/2/2016', value: 4},
                    {date: '1/2/2016', value: 5}
                ]
            }
        ];

        expect(groupBy(data, 'date')).toEqual(expectedResult);
    });
});
