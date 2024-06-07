import { expect, test } from 'vitest';

const input = Math.sqrt(9);
const stock = {
  type: 'apples',
  count: 13,
};
const stockBill = {
  type: 'apples',
  count: 13,
};

const stockMary = {
  type: 'apples',
  count: 13,
};
function getApples() {
  return 3;
}
const data = [
  {
    name: 'apple',
    count: 3,
  },
  {
    name: 'banana',
    count: 5,
  },
];

function getApplesFromStock(stock: string) {
  if (stock === 'Bill') return 13;
}
function number() {
  return 3;
}
test('Page', () => {
  expect(true).toBe(true);
  expect(input).toBe(3);

  expect(stock).toMatchObject({
    type: 'apples',
    count: 13,
  });

  expect(stock).toHaveProperty('type', 'apples');

  expect(stock.type).to.eq('apples');
});

test('get apples should be defined', () => {
  expect(getApples()).toBe(3);
  expect(getApples).toBeDefined();
});

test('Apple getApplesFromStock', () => {
  expect(getApplesFromStock('Mary')).toBeUndefined();
});
test("should be truthy if there's an apple", () => {
  expect(data).toBeTruthy();
  expect(number()).toBeGreaterThan(2);
});

test('check different 2 objects are same', () => {
  expect(stockBill).toEqual(stockMary);
});
