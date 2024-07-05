import { describe, expect, it } from 'vitest';

const userData = {
  name: 'Ben',
  age: 32,
};

const testPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve(true);
    }, 400);
  }
});

describe('It should test 10 object methods', () => {
  it('should return true if the object has property', () => {
    expect(userData).toHaveProperty('age');
  });

  it('age should be greater than 30', () => {
    expect(userData.age).toBeGreaterThan(30);
  });

  it('the result should equal the desired age', () => {
    expect(userData.age).toEqual(32);
  });
  it.fails('should be able to expect a test to fail', () => {
    expect(userData.age).not.toBe(32);
  });
});
