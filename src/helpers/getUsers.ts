import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { count } from 'drizzle-orm';

export const getUsers = async (limit = 10, offset = 1) => {
  try {
    const results = await db.query.users
      .findMany({
        limit,
        offset,
      })
      .execute();

    const totalCount = await db.select({ values: count() }).from(users);
    return {
      data: results,
      totalItems: totalCount[0].values,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
};
