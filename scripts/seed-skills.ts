import { skills } from '@/consts/skills';
import { db, pool } from '@/lib/db';
import { skills as skillsSchema } from '@/lib/schema';

async function main() {
  try {
    for (const skill of skills) {
      await db.insert(skillsSchema).values({
        id: crypto.randomUUID(),
        name: skill,
      });
    }
    pool.end();
  } catch (error) {
    console.log('Error seeding skills: ', error);
  }
}

main();
