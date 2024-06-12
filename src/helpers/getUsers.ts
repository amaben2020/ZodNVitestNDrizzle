import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { count, or, sql } from 'drizzle-orm';

export type TUsers = typeof users.$inferInsert;

const fuzzySearch = async (query: string) => {
  // you must install pg_trgm first in database
  try {
    const response = await db
      .select()
      .from(users)
      .where(
        or(
          sql`similarity(first_name, ${query}) > 0.2`,
          sql`similarity(last_name, ${query}) > 0.2`,
          sql`similarity(email, ${query}) > 0.2`,
          sql`similarity(first_name, ${query}) > 0.2`
        )
      )
      .execute();

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (
  query = 'Software engineer',
  limit = 10,
  offset = 0
) => {
  const q = '%' + query + '%';

  try {
    const res2 = await fuzzySearch(q);
    console.log(res2);
    const totalCount = await db.select({ values: count() }).from(users);
    return {
      data: res2,
      totalItems: totalCount[0].values,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
};
