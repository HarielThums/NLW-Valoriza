import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";
import { Exclude } from "class-transformer";

@Entity("users") // nome da tabela que é referenciada
export class User {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Exclude()
	@Column()
	password: string;

	@Column()
	admin: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	constructor() {
		if (!this.id) this.id = v4();
	}
}
