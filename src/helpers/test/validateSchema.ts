import { expect } from 'vitest';
import { AnyZodObject, z } from 'zod';

export async function validateSchema<T extends AnyZodObject>(
  data: any,
  schema: T
) {
  const parsedDataResponse = schema.parse(data);

  expect(parsedDataResponse.name).toBe(data?.name);

  return parsedDataResponse as z.infer<T>;
}

export const validateList = (data: any, key: string = 'data') => {
  expect(Array.isArray(data)).toBeTruthy();
};

export const validationStatusCode = (
  status: number,
  expectedStatus: number = 200
) => {
  expect(status).toBe(expectedStatus);
};
