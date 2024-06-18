const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

//helper function to be reused
runOperation = (operation, a, b, expected) =>{
  const actual = operation(a,b);
  expect(actual).toBe(expected);
}

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    // const expected = 5;
    // const actual = sum(2, 3);
    // expect(actual).toBe(expected);
    runOperation(sum, 2, 3, 5);
  });

  test('can add two large positive numbers', () => { 
    // const expected = 100000000;
    // const actual = sum(50000000, 50000000);
    // expect(actual).toBe(expected);
    runOperation(sum,50000000, 50000000, 100000000);
  });

  test('can add two negative numbers', () => {
    // const expected = -5;
    // const actual = sum(-2,-3)
    // expect(actual).toBe(expected);
    runOperation(sum,-2,-3,-5);
  });

  test('can add zero', () => {
    // const expected = 2;
    // const actual = sum(2,0);
    // expect(actual).toBe(expected)
    runOperation(sum,2,0,2);
  });

});




describe('subtract', () => {
  test('can substract two small positive numbers', () => {
    // const expected = 1;
    // const actual = subtract(3,2);
    // expect(actual).toBe(expected);
    runOperation(subtract,3,2,1);
  });

  test('can subtract a larger number from a smaller number', () => {
    // const expected = 85;
    // const actual = subtract(90,5);
    // expect(actual).toBe(expected);
    runOperation(subtract,90,5,85);
  });

  test('can subtract a smaller number from a larger number', () => {
    // const expected = -85 ;
    // const actual = subtract(5,90)
    runOperation(subtract,5,90,-85);
  })

});




describe('multiply', () => {
  
  test('can multiply two negative numbers', () => {
    // const expected = 10;
    // const actual = multiply(-5, -2);
    // expect(actual).toBe(expected);
    runOperation(multiply,-5,-2,10);

  });

  test('can multiply by zero', () => {
    // const expected = 0;
    // const actual = multiply(3147427,0);
    // expect(actual).toBe(expected);g
    runOperation(multiply,3147427,0,0);

  });

  test('can multiply two small positive numbers', () => {
    // const expected = 8;
    // const actual = sum(2, 4);
    // expect(actual).toBe(expected);
    runOperation(multiply, 2, 4, 8);
  });

});



describe('divide', () => {

test('can divide two small positive numbers', () =>{
  // const expected = 2;
  // const actual = divide(6,3);
  // expect(actual).toBe(expected);
  runOperation(divide,6,3,2);

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
    // const expected = 1;
    // const actual = modulus(3,2);
    // expect(actual).toBe(expected);
    runOperation(modulus,3,2,1);
  });

  test('number can find the modulus of itself', () =>{
    // const expected = 0;
    // const actual = modulus(3,3);
    // expect(actual).toBe(expected);
    runOperation(modulus,3,3,0);

  });

});

describe('even', () => {

  test('can identify an even number',() => {
    const expected = true;
    const actual = even(6);
    expect(actual).toBe(expected);
  });

  test('can identify as not an even number', () => {
    const expected = false;
    const actual = even(5);
    expect(actual).toBe(expected);
  });

});




describe('odd', () => {

  test('can identify an odd number',() => {
    const expected = true;
    const actual = odd(9);
    expect(actual).toBe(expected);
  });

  test('can identify as not an odd number', () => {
    const expected = false;
    const actual = odd(12);
    expect(actual).toBe(expected);
  });

});
