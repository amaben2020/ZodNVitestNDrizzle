import {
  getOrdersAndCustomers,
  validateOrdersDataSchema,
} from '@/helpers/getOrdersAndCustomers';
import { validateSchema } from '@/helpers/test/validateSchema';
import { it } from 'vitest';

it('It should return valid data', async () => {
  const data = await getOrdersAndCustomers();

  validateSchema(data, validateOrdersDataSchema as any);
});
