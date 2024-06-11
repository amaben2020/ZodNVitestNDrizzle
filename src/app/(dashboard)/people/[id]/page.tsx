import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { eq } from 'drizzle-orm';

const page = async ({ params }: { params: { id: string } }) => {
  const user = await db.query.users.findFirst({
    where: eq(users.id, params.id),
  });
  return <div>{user?.email}</div>;
};

export default page;
