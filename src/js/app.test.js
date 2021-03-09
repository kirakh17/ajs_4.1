import showHealthLevel from './app';

describe('showHealthLevel:', () => {
  test.each([
    [{ name: 'Маг', health: 14 }, 'critical'],
    [{ name: 'Лучник', health: 15 }, 'wounded'],
    [{ name: 'Маг', health: 50 }, 'wounded'],
    [{ name: 'Лучник', health: 51 }, 'healthy'],
  ])('should expect for %o health level %s)', (obj, expected) => {
    expect(showHealthLevel(obj)).toBe(expected);
  });
});
