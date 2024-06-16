ALTER TABLE "order" RENAME COLUMN "customer_id" TO "cus_id";--> statement-breakpoint
ALTER TABLE "order" DROP CONSTRAINT "order_customer_id_customer_id_fk";
--> statement-breakpoint
ALTER TABLE "order" ALTER COLUMN "id" SET DATA TYPE varchar;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order" ADD CONSTRAINT "order_cus_id_customer_id_fk" FOREIGN KEY ("cus_id") REFERENCES "public"."customer"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
