import { parseAvailabilityAndOverridesHelper } from '@/helpers/parseAvailabilityAndOverrides';
import { db } from '@/lib/db';
import { providerAvailability } from '@/mock/availability';

export default async function Home() {
  const availability =
    parseAvailabilityAndOverridesHelper(providerAvailability);

  // const data = await getPlanets();

  const data = await db.query.orders.findMany({
    with: {
      customer: true,
    },
  });

  console.log('data', data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {JSON.stringify(availability)} */}

      {/* <h1> {JSON.stringify(renderSpaceName(data))} </h1> */}

      {/* <LoginBtn /> */}
      {JSON.stringify(data)}
    </main>
  );
}
