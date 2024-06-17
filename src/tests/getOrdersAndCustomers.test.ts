import {
  getOrdersAndCustomers,
  validateOrdersDataSchema,
} from '@/helpers/getOrdersAndCustomers';
import { validateList, validateSchema } from '@/helpers/test/validateSchema';
import { describe, expect, it, test } from 'vitest';

describe('It should properly validate the getOrdersAndCustomers helper', () => {
  it('It should return valid data', async () => {
    const data = await getOrdersAndCustomers();

    validateSchema(data, validateOrdersDataSchema as any);
    validateList(data);
  });

  test.fails('fail test', async () => {
    // more like opposite
    await expect(false).rejects.toBe(true);
  });
});
