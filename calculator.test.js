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

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
