import { z } from 'zod';
import { userZodSchema } from './usersZodSchema';

const repeatedItems = {
  id: z.number(),
  created_by: z.string(),
  created_at: z.string(),
  updated_by: z.string().nullable(),
  updated_at: z.string().nullable(),
};
// we could spread the actual zod object here using z.shape
export const parseAvailability = z.object({
  ...repeatedItems,
  provider_id: z.number(),
  day: z.number(),
  start_time: z.string(),
  end_time: z.string(),
  is_override: z.literal(false),
});

export const parseAvailabilityOverrides = z.object({
  ...repeatedItems,
  provider_id: z.number(),
  start_time: z.string(),
  end_time: z.string(),
  date: z.string().date(),
  is_override: z.literal(true),
});

export const providerAvailabilityAndOverrides = z.object({
  timezone: z.string(),
  overrides: z.record(z.array(parseAvailabilityOverrides)),
  monday: z.array(parseAvailability),
  tuesday: z.array(parseAvailability),
  wednesday: z.array(parseAvailability),
  thursday: z.array(parseAvailability),
  friday: z.array(parseAvailability),
  saturday: z.array(parseAvailability),
  sunday: z.array(parseAvailability),
});

const baseUserData = z.object({
  lastname: z.string().min(2).max(50),
});

export const userInfo = z.object({
  ...baseUserData.shape,
  email: z.string().email(),
  firstName: z.string().includes('Ben'),
});
