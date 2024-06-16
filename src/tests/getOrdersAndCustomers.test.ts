import {
  getOrdersAndCustomers,
  validateOrdersDataSchema,
} from '@/helpers/getOrdersAndCustomers';
import { validateSchema } from '@/helpers/test/validateSchema';
import { describe, it } from 'vitest';

describe('It should properly validate the getOrdersAndCustomers helper', () => {
  it('It should return valid data', async () => {
    const data = await getOrdersAndCustomers();

    validateSchema(data, validateOrdersDataSchema as any);
  });
});
