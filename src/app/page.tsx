import LoginBtn from '@/components/LoginBtn';
import { getPlanets, renderSpaceName } from '@/helpers/getPlanets';
import { parseAvailabilityAndOverridesHelper } from '@/helpers/parseAvailabilityAndOverrides';
import { providerAvailability } from '@/mock/availability';

export default async function Home() {
  const availability =
    parseAvailabilityAndOverridesHelper(providerAvailability);

  const data = await getPlanets();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(availability)}

      <h1> {JSON.stringify(renderSpaceName(data))} </h1>

      <LoginBtn />
    </main>
  );
}
