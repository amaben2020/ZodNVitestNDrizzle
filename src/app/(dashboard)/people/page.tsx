import { getUsers } from '@/helpers/getUsers';

const page = async () => {
  const users = await getUsers();

  return (
    <div className="p-10 max-w-screen-xl">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        {users?.data?.map(({ email, id, name, lastName }) => (
          <div className="p-4 border min-h-10 w-[500px]" key={id}>
            <h2 className="text-white">{lastName}</h2>
            <p>{email}</p>
          </div>
        ))}
      </div>
      Total Users - {users?.totalItems}
    </div>
  );
};

export default page;
