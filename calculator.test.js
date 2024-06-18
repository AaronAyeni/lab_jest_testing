const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 100000000;
    const actual = sum(50000000, 50000000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    const expected = -5;
    const actual = sum(-2,-3)
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    const expected = 2;
    const actual = sum(2,0);
    expect(actual).toBe(expected)
  });

});




describe('subtract', () => {
  test('can substract two small positive numbers', () => {
    expected = 1;
    actual = subtract(3,2);
    expect(actual).toBe(expected);
  });

  test('can subtract a larger number from a smaller number', () => {
    expected = 85;
    actual = subtract(90,5);
    expect(actual).toBe(expected);
  });

});




describe('multiply', () => {
  
  test('can multiply two negative numbers', () => {
    expected = 10;
    actual = multiply(-5, -2);
    expect(actual).toBe(expected);

  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(3147427,0);
    expect(actual).toBe(expected);

  });

});




describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
