import ageCounter from './ageCounter';

jest.useFakeTimers().setSystemTime(new Date('2022-04-08'));

afterAll(() => {
  jest.useRealTimers();
});

describe('age counter function', () => {
  test('resolves ages correctly', () => {
    expect(ageCounter('1992-12-11')).toBe(29);

    expect(ageCounter('1994-03-22')).toBe(28);

    expect(ageCounter('0001-03-22')).toBe(2021);

    expect(ageCounter('2022-04-08')).toBe(0);
  });
});
