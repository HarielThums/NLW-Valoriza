import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { v4 } from 'uuid';
import { Expose } from 'class-transformer';

@Entity('tags')
export class Tag {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Expose({ name: 'nameCustom' })
	nameCustom(): string {
		return `#${this.name}`;
	}

	constructor() {
		if (!this.id) this.id = v4();
	}
}
