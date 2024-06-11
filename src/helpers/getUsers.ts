import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { count, ilike, or } from 'drizzle-orm';

export type TUsers = typeof users.$inferInsert;

export const getUsers = async (
  query = 'Software engineer',
  limit = 10,
  offset = 1
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
