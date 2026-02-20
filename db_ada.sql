CREATE TABLE "user" (
  "id" integer PRIMARY KEY,
  "correo" varchar,
  "dispositivo" varchar,
  "created_at" timestamp,
  "update_at" timestamp
);

CREATE TABLE "type_Selection" (
  "id" integer PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "User_Selection" (
  "id" interger PRIMARY KEY,
  "user_id" integer,
  "type_selection_id" integer,
  "stages_cards_id" integer,
  "res_user" json,
  "created_at" timestamp,
  "update_at" timestamp
);

CREATE TABLE "stages" (
  "id" integer PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "cards" (
  "id" integer PRIMARY KEY,
  "stage_Id" integer,
  "name" varchar
);

CREATE TABLE "stages_cards" (
  "id" interger PRIMARY KEY,
  "stage_id" interger,
  "card_id" interger
);

ALTER TABLE "User_Selection" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "User_Selection" ADD FOREIGN KEY ("stages_cards_id") REFERENCES "stages_cards" ("id");

ALTER TABLE "User_Selection" ADD FOREIGN KEY ("type_selection_id") REFERENCES "type_Selection" ("id");

ALTER TABLE "cards" ADD FOREIGN KEY ("stage_Id") REFERENCES "stages" ("id");

ALTER TABLE "cards" ADD FOREIGN KEY ("id") REFERENCES "stages_cards" ("card_id");

ALTER TABLE "stages" ADD FOREIGN KEY ("id") REFERENCES "stages_cards" ("stage_id");
