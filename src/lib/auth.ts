import { DrizzleAdapter } from '@auth/drizzle-adapter';

import GithubProvider from 'next-auth/providers/github';

import { db } from './db';

export const authOptions = {
  adapter: DrizzleAdapter(db) as any,
  debug: true,
  secret: '1232j903vhv38vh384809',
  providers: [
    GithubProvider({
      clientId: 'Ov23liA2hGQ4FW6RqMke',
      clientSecret: '4d26c718bfe07312d1d6f1d9d55f22d49725af11',
    }),
  ],
};
