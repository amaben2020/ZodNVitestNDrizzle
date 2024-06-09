import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { createClient } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import GithubProvider from 'next-auth/providers/github';
import * as schema from './schema';

const client = createClient({
  connectionString:
    'postgres://default:CK3LWXf4iyoY@ep-tight-mode-66645246.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
});

const db = drizzle(client, { schema });

export const authOptions = {
  adapter: DrizzleAdapter(db) as any,
  debug: true,
  secret: '1232j903vhv38vh384809',
  providers: [
    GithubProvider({
      clientId: 'Ov23liA2hGQ4FW6RqMke',
      clientSecret: '4d26c718bfe07312d1d6f1d9d55f22d49725af11',
      // authorization: { params: { scope: 'read:user user:email' } },
    }),
  ],
};
