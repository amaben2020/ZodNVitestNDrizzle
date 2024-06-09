import { JOB_TITLE } from '@/consts/jobTitle';
import { db, pool } from '@/lib/db';
import { users as usersSchema } from '@/lib/schema';
import { eq } from 'drizzle-orm';
async function updateJobTitle() {
  const users = await db.query.users.findMany();

  for (let user of users) {
    const randomIds = Math.floor(Math.random() * JOB_TITLE.length);

    await db
      .update(usersSchema)
      .set({
        jobTitle: JOB_TITLE[randomIds],
      })
      .where(eq(usersSchema.id, user.id));
  }
  pool.end();
}

updateJobTitle();
