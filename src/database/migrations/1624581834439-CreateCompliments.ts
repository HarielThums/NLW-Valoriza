import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompliments1624581834439 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'compliments',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'userSender',
						type: 'uuid',
					},
					{
						name: 'userReceiver',
						type: 'uuid',
					},
					{
						name: 'tagId',
						type: 'uuid',
					},
					{
						name: 'message',
						type: 'varchar',
					},
					{
						name: 'createdAt',
						type: 'timestamp',
						default: 'now()',
					},
				],
				foreignKeys: [
					{
						name: 'FKUserSenderCompliments',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['userSender'],
						onDelete: 'set null',
						onUpdate: 'set null',
					},
					{
						name: 'FKUserReceiverCompliments',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['userReceiver'],
						onDelete: 'set null',
						onUpdate: 'set null',
					},
					{
						name: 'FKTagIdCompliments',
						referencedTableName: 'tags',
						referencedColumnNames: ['id'],
						columnNames: ['tagId'],
						onDelete: 'set null',
						onUpdate: 'set null',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('compliments');
	}
}
