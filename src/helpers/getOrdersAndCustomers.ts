import { db } from '@/lib/db';
import { z } from 'zod';

const CustomerSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});
export const validateOrdersDataSchema = z.array(
  z.object({
    orderId: z.number(),
    item: z.string().nullable(),
    cusId: z.number(),
    customer: CustomerSchema,
  })
);

export const getOrdersAndCustomers = async () => {
  try {
    const data = await db.query.orders.findMany({
      with: {
        customer: true,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof Error) console.error(error);
  }
};
