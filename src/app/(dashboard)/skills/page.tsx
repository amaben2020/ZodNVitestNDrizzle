import { db } from '@/lib/db';
import { skills as skillsSchema, usersToSkills } from '@/lib/schema';
import { eq, sql } from 'drizzle-orm';
import Link from 'next/link';

async function getSkills() {
  const skills = await db
    .select({
      id: skillsSchema.id,
      name: skillsSchema.name,
      count: sql<number>`count(${usersToSkills.userId})`,
    })
    .from(skillsSchema)
    .leftJoin(usersToSkills, eq(skillsSchema.id, usersToSkills.skillId))
    .groupBy(skillsSchema.id, skillsSchema.name)
    .execute();

  return skills;
}

const page = async () => {
  const skills = await getSkills();
  return (
    <div>
      Skills
      {skills.map((skill) => {
        return (
          <Link href={`/skills/${skill.id}`} key={skill.id}>
            <p className="text-white border my-3 p-3">
              {skill.name} - {skill.count}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default page;
