CREATE TABLE IF NOT EXISTS "skills" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "skills_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_to_skill" (
	"user_id" text NOT NULL,
	"skill_id" text NOT NULL,
	"rating" integer,
	CONSTRAINT "users_to_skill_user_id_skill_id_pk" PRIMARY KEY("user_id","skill_id")
);
