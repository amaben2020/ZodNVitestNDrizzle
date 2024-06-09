import { getUsers } from '@/helpers/getUsers';
import { validateSchema } from '@/helpers/test/validateSchema';
import { userZodSchema } from '@/schema/usersZodSchema';
import { test } from 'vitest';

test('It should return correct users', async () => {
  const data = await getUsers();
  validateSchema(data, userZodSchema as any);
});
