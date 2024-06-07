import { getPlanets, renderSpaceName } from '@/helpers/getPlanets';
import { parseAvailabilityAndOverridesHelper } from '@/helpers/parseAvailabilityAndOverrides';
import { parseString } from '@/helpers/parseString';
import { providerAvailability } from '@/mock/availability';

export default async function Home() {
  const word = parseString('Hello, world!');

  const availability =
    parseAvailabilityAndOverridesHelper(providerAvailability);

  const data = await getPlanets();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {word}

      {JSON.stringify(availability)}

      <h1> {JSON.stringify(renderSpaceName(data))} </h1>
    </main>
  );
}
