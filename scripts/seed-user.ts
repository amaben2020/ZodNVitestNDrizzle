import { db, pool } from '@/lib/db';
import { users } from '@/lib/schema';
import { faker } from '@faker-js/faker';

import { TNewUser } from './types';
async function main() {
  for (let i = 0; i < 100; i++) {
    const firstName = faker.internet.userName();
    const lastName = faker.internet.userName();
    const image = faker.image.avatarGitHub();
    const email = faker.internet.email();

    const newUser: TNewUser = {
      id: faker.string.uuid(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: image,
    };

    await db.insert(users).values(newUser).execute();
  }

  pool.end();
}

main();
