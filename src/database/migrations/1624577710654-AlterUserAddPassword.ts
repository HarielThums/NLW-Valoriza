import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1624577710654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn( 
			"users", new TableColumn({ // nome da tabela que vai receber uma nova coluna
				name: "password",
				type: "varchar"
			}) 
		)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn("users", "password")
    }

}
