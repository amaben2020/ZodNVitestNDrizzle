ALTER TABLE "customer" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customer" ADD CONSTRAINT "customer_email_unique" UNIQUE("email");