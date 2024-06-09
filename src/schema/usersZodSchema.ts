import { z } from 'zod';

const jobTitleEnum = z.enum([
  'Product Manager',
  'Software Engineer',
  'Data Scientist',
]);

export const userZodSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string().min(1, { message: 'This field has to be filled.' }).email(),
  emailVerified: z.boolean().nullable(),
  image: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  jobTitle: jobTitleEnum,
});
