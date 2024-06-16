import { db } from '@/lib/db';
import { users as usersSchema, usersToSkills } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import { skills } from '../../../../lib/schema';

async function getSkillsById(id: string) {
  const skill = await db.query.skills.findFirst({
    where: eq(skills.id, id),
  });

  return skill;
}

async function getUsersBySkillId(id: string) {
  return await db
    .select()
    .from(usersSchema)
    .leftJoin(usersToSkills, eq(usersSchema.id, usersToSkills.userId))
    .where(eq(usersToSkills.skillId, id))
    .execute();
}

const page = async ({ params, searchParams }: any) => {
  const skill = await getSkillsById(params.id);
  const data = await getUsersBySkillId(params.id);

  console.log('skill', data);

  if (!skill) {
    return notFound();
  }
  return (
    <div className="text-white">
      {skill?.name}
      {data.map((d) => (
        <li key={d.user.id}>
          {d?.user?.email} - {d.users_to_skill?.rating}
        </li>
      ))}
    </div>
  );
};

export default page;
