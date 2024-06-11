import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserTable1718068139067 implements MigrationInterface {
  name = 'AddUserTable1718068139067';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users"
       (
           "id"              uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "email"           character varying NOT NULL,
           "phone_number"    character varying NOT NULL,
           "social_media_id" character varying NOT NULL,
           "password"        character varying NOT NULL,
           "createdAt"       TIMESTAMP         NOT NULL DEFAULT now(),
           "updatedAt"       TIMESTAMP         NOT NULL DEFAULT now(),
           "deletedAt"       TIMESTAMP,
           CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
