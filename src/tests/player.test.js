const player = require('../player');

it('should throw error if not number', () => {
  expect(() => {
    player.fizzBuzz('sd');
  }).toThrow();
});
it('should return FizzBuzz if divisable by 3 and 5', () => {
  expect(player.fizzBuzz(15)).toMatch(/FizzBuzz/);
});
it('should return Fizz if divisable by 3', () => {
  expect(player.fizzBuzz(6)).toMatch(/Fizz/);
});
it('should return Buzz if divisable by 5', () => {
  expect(player.fizzBuzz(10)).toMatch(/Buzz/);
});
