import config from '@/lib/config';
import type { Config } from 'drizzle-kit';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  dialect: 'postgresql', // "mysql" | "sqlite" | "postgresql"
  schema: './src/lib/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: config.POSTGRES_URL,
  },
  verbose: true,
  strict: true,
} satisfies Config);
