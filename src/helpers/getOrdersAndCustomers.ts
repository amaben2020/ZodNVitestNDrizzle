import { db } from '@/lib/db';
import { TOrders } from '@/lib/schema';

export const getOrdersAndCustomers = async (): Promise<
  TOrders[] | undefined
> => {
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
