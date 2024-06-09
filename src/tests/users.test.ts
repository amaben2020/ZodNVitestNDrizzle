import { getUsers } from '@/helpers/getUsers';
import { validateSchema } from '@/helpers/test/validateSchema';
import { userZodSchema } from '@/schema/usersZodSchema';
import { expect, test } from 'vitest';

test('It should return correct users', async () => {
  const data = await getUsers();
  validateSchema(data, userZodSchema as any);
});

test('id property should always be present', async () => {
  const data = await getUsers();
  const dataIsAvaillable = Array.isArray(data) && data.length > 0;
  expect(dataIsAvaillable && data[0]).toHaveProperty('id');
});
