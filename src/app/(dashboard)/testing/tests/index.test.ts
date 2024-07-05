import { describe, expect, it } from 'vitest';

// to run specific test, npm test <filename> i.e npm test index
describe('it should return the correct name', () => {
  const userMockData = {
    firstName: 'Amala Ben',
    lastname: 'Benoski',
    email: 'ameabem@sa.sa',
  };
  it('should return correct values', () => {
    expect(userMockData).toHaveProperty('firstName');
    expect(userMockData.firstName).toContain('B');
  });
});
