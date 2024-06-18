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
    const expected = 1;
    const actual = subtract(3,2);
    expect(actual).toBe(expected);
  });

  test('can subtract a larger number from a smaller number', () => {
    const expected = 85;
    const actual = subtract(90,5);
    expect(actual).toBe(expected);
  });

});




describe('multiply', () => {
  
  test('can multiply two negative numbers', () => {
    const expected = 10;
    const actual = multiply(-5, -2);
    expect(actual).toBe(expected);

  });

  test('can multiply by zero', () => {
    const expected = 0;
    const actual = multiply(3147427,0);
    expect(actual).toBe(expected);

  });

});



describe('divide', () => {

test('can divide two small positive numbers', () =>{
  const expected = 2;
  const actual = divide(6,3);
  expect(actual).toBe(expected);

});

test('can handle division by zero', () => {
  expect(()=> {
    divide (2,0);
}).toThrow("Division by zero is not allowed.");
  });
// expected = Error("Division by zero is not allowed.");
//  actual = divide(2,0);
//  expect(actual).toBe(expected);

// });
});



describe('modulus', () => {
  
  test( 'can find modulus of two small positive numbers', () =>{
    const expected = 1;
    const actual = modulus(3,2);
    expect(actual).toBe(expected);
  });

  test('number can find the modulus of itself', () =>{
    const expected = 0;
    const actual = modulus(3,3);
    expect(actual).toBe(expected);

  });

});

describe('even', () => {

  test('can identify an even number',() => {
    const expected = true;
    const actual = even(6);
    expect(actual).toBe(expected);
  });
  

});

describe('odd', () => {

});
