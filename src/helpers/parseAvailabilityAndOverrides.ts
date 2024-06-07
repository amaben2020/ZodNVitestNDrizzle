import { providerAvailabilityAndOverrides } from '@/schema/parseAvailability';

export const parseAvailabilityAndOverridesHelper = (data: unknown) => {
  return providerAvailabilityAndOverrides.parse(data);
};
