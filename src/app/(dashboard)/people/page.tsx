import { getUsers } from '@/helpers/getUsers';

const page = async () => {
  const data = await getUsers();
  return <div>{JSON.stringify(data)}</div>;
};

export default page;
