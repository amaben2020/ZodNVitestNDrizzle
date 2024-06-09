import { db } from '@/lib/db';
import { users } from '@/lib/schema';

export const getUsers = async () => {
  try {
    const results = await db.select().from(users).limit(10).execute();
    return results;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
};
