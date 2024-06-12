import { db } from '@/lib/db';

async function getSkills() {
  const skills = await db.query.skills.findMany();

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
            <p className="text-white">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
