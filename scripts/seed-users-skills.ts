import { db, pool } from '@/lib/db';
import {
  skills as skillsSchema,
  users as usersSchema,
  usersToSkills,
} from '@/lib/schema';
import { TNewUserSkills } from './types';

async function main() {
  const users = await db.select().from(usersSchema).execute();
  const skills = await db.select().from(skillsSchema).execute();

  for (let skill of skills) {
    for (let user of users) {
      if (Math.random() < 0.5) continue;
      const rating = Math.floor(Math.random() * 5) + 1;
      await db
        .insert(usersToSkills)
        .values({
          userId: user.id,
          skillId: skill.id,
          rating: rating,
        } satisfies TNewUserSkills)
        .onConflictDoNothing()
        .execute();
    }
  }
  pool.end();
}

main();
