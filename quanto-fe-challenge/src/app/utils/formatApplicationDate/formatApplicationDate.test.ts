import formatApplicationDate from './formatApplicationDate';

describe('application date formatter function', () => {
  test('resolves dates in the expected format', () => {
    expect(formatApplicationDate('2022-04-08')).toBe('08/04/2022');

    expect(formatApplicationDate('2018-05-15')).toBe('15/05/2018');

    expect(formatApplicationDate('1992-12-11')).toBe('11/12/1992');
  });
});
