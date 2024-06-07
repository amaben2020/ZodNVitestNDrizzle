import { z } from 'zod';

export const parsedData = z
  .object({
    name: z.string(),
  })
  .transform((item) => ({
    ...item,
    splitName: item.name.split('').join('-'),
  }));

export const getPlanets = async () => {
  try {
    const response = await fetch(
      'https://swapi.dev/api/planets/1',

      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    const parsedResponse = parsedData.parse(data);
    return parsedResponse;
  } catch (error) {
    console.error(error);
  }
};

export const renderSpaceName = (
  data:
    | {
        splitName: string;
        name: string;
      }
    | undefined
) => {
  return data;
};
