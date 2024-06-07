import { z } from 'zod';

export const parseString = (value: string) => {
  const stringParser = z.string();

  try {
    return stringParser.parse(value);
  } catch (error) {
    throw new Error('Invalid string');
  }
};
