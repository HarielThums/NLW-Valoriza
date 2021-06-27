import { Column,	CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn,} from "typeorm";
import { v4 } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
export class Compliments {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	userSender: string;

	@JoinColumn({ name: "userSender" })
	@ManyToOne(() => User)
	userSenderRelation: User;

	@Column()
	userReceiver: string;

	@JoinColumn({ name: "userReceiver" })
	@ManyToOne(() => User)
	userReceiverRelation: User;

	@Column()
	tagId: string;

	@JoinColumn({ name: "tagId" })
	@ManyToOne(() => Tag)
	tag: Tag;

	@Column()
	message: string;

	@CreateDateColumn()
	createdAt: Date;

	constructor() {
		if (!this.id) this.id = v4();
	}
}
