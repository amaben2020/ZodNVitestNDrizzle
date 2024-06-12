import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import config from './config';

const connectionString = config.POSTGRES_URL;
const pool = postgres(connectionString, { max: 1 });

export const db = drizzle(pool);

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  firstName: text('first_name'),
  lastName: text('last_name'),
  jobTitle: text('job_title'),
});

export const skills = pgTable('skills', {
  id: text('id').notNull().primaryKey(),
  name: text('name').notNull().unique(),
});

// the many to many table for users and skills
export const usersToSkills = pgTable(
  'users_to_skill',
  {
    userId: text('user_id').notNull(),
    skillId: text('skill_id').notNull(),
    rating: integer('rating'),
  },
  (us) => ({
    compoundKey: primaryKey({
      columns: [us.userId, us.skillId],
    }),
  })
);
export const usersRelations = relations(users, ({ many }) => ({
  usersToSkills: many(usersToSkills),
}));

export const skillsRelations = relations(skills, ({ many }) => ({
  skillsToUsersSkills: many(usersToSkills),
}));

export const usersToSkillsRelations = relations(users, ({ one }) => ({
  skill: one(skills, {
    fields: [usersToSkills.skillId as any],
    references: [skills.id],
  }),
  user: one(users, {
    fields: [usersToSkills.userId as any],
    references: [users.id],
  }),
}));

// export const accounts = pgTable(
//   'account',
//   {
//     userId: text('userId')
//       .notNull()
//       .references(() => users.id, { onDelete: 'cascade' }),
//     type: text('type').$type<AdapterAccount>().notNull(),
//     provider: text('provider').notNull(),
//     providerAccountId: text('providerAccountId').notNull(),
//     refresh_token: text('refresh_token'),
//     access_token: text('access_token'),
//     expires_at: integer('expires_at'),
//     token_type: text('token_type'),
//     scope: text('scope'),
//     id_token: text('id_token'),
//     session_state: text('session_state'),
//   },
//   (account) => ({
//     compoundKey: primaryKey({
//       columns: [account.provider, account.providerAccountId],
//     }),
//   })
// );

// export const sessions = pgTable('session', {
//   sessionToken: text('sessionToken').primaryKey(),
//   userId: text('userId')
//     .notNull()
//     .references(() => users.id, { onDelete: 'cascade' }),
//   expires: timestamp('expires', { mode: 'date' }).notNull(),
// });

// export const verificationTokens = pgTable(
//   'verificationToken',
//   {
//     identifier: text('identifier').notNull(),
//     token: text('token').notNull(),
//     expires: timestamp('expires', { mode: 'date' }).notNull(),
//   },
//   (vt) => ({
//     compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
//   })
// );
