import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { count, ilike, or, sql } from 'drizzle-orm';

export type TUsers = typeof users.$inferInsert;

const fuzzySearch = async (query: string) => {
  // you must install pg_trgm first in database
  console.log('query', query);
  try {
    const response = await db
      .select()
      .from(users)
      .where(
        or(
          // sql`similarity(first_name, ${query}) > 0.2`,
          // sql`similarity(last_name, ${query}) > 0.2`,
          // sql`similarity(email, ${query}) > 0.2`,
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
    const results = await db.query.users
      .findMany({
        limit,
        offset,
        where: or(
          ilike(users.jobTitle, q),
          ilike(users.name, q),
          ilike(users.firstName, q),
          ilike(users.lastName, q),
          ilike(users.email, q)
        ),
      })
      .execute();
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
