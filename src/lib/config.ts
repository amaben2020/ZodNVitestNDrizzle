import { loadEnvConfig } from '@next/env';
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config = {
  POSTGRES_URL: process.env.DATABASE_URL!,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET!,
  GITHUB_ID: process.env.GITHUB_ID!,
  GITHUB_SECRET: process.env.GITHUB_SECRET!,
  APP_ENV: process.env.APP_ENV!,
};

export default config;
