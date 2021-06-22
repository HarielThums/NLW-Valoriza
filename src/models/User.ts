import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users") // nome da tabela que é referenciada
export class User {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	admin: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	constructor() {
		if (!this.id) this.id = uuid();
	}
}
