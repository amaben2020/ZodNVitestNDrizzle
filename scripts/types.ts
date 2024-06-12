import { users, usersToSkills } from '@/lib/schema';

export type TNewUser = typeof users.$inferInsert;

export type TNewUserSkills = typeof usersToSkills.$inferInsert;
