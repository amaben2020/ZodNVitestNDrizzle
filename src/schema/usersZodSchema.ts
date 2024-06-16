import { z } from 'zod';

const jobTitleEnum = z.enum([
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'Software Engineer',
  'Data Scientist',
  'Data Analyst',
  'Product Manager',
]);

export const userZodSchema = z.array(
  z.object({
    data: z.object({
      id: z.string(),
      name: z.string().nullable(),
      email: z
        .string()
        .min(1, { message: 'This field has to be filled.' })
        .email(),
      emailVerified: z.boolean().nullable(),
      image: z.string(),
      firstName: z.string().nullable(),
      lastName: z.string().nullable(),
      jobTitle: jobTitleEnum,
    }),
    totalItems: z.number(),
  })
);
