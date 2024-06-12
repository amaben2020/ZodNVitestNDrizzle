import { db } from '@/lib/db';
import { skills as skillsSchema, usersToSkills } from '@/lib/schema';
import { eq, sql } from 'drizzle-orm';

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
  console.log('skills', skills);
  return skills;
}

const page = async () => {
  const skills = await getSkills();
  return (
    <div>
      Skills
      {skills.map((skill) => {
        return (
          <div key={skill.id}>
            <p className="text-white">
              {skill.name} - {skill.count}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
