import { getPlanets, parsedData } from '@/helpers/getPlanets';
import { validateSchema } from '@/helpers/test/validateSchema';
import { test } from 'vitest';
import { AnyZodObject } from 'zod';

test('Planets schema and object should match', async () => {
  const data = await getPlanets();

  validateSchema(data, parsedData as unknown as AnyZodObject);
});
