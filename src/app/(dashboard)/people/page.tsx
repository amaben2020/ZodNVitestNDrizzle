import { getUsers } from '@/helpers/getUsers';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const page = async ({ searchParams }: { searchParams: { query: string } }) => {
  const users = await getUsers(searchParams.query);

  console.log('searchParams', users);

  const searchUser = async (formData: FormData) => {
    'use server';
    const query = formData.get('query');

    revalidatePath('/');
    redirect(`/people?query=${query}`);
  };

  return (
    <div className="p-10 max-w-screen-xl">
      <form action={searchUser}>
        <input
          type="search"
          name="query"
          className="p-3 border w-[600px]"
          placeholder="Search users..."
        />

        <button> Submit</button>
      </form>
      <div className="flex justify-between items-center gap-4 flex-wrap">
        {users?.data?.map(({ email, id, name, lastName }) => (
          <Link
            href={`/people/${id}`}
            className="p-4 border min-h-10 w-[500px]"
            key={id}
          >
            <h2 className="text-white">{lastName}</h2>
            <p>{email}</p>
            <p>{name}</p>
          </Link>
        ))}
      </div>
      Total Users - {users?.totalItems}
    </div>
  );
};

export default page;
