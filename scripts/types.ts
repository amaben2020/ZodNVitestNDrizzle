import { users } from '@/lib/schema';

export type TNewUser = typeof users.$inferInsert;
