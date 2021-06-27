import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("tags")
export class Tag {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	constructor() {
		if (!this.id) this.id = v4();
	}
}
