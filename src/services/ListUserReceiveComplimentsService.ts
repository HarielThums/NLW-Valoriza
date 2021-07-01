import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepostories';

export class ListUserReceiveComplimentsService {
	async execute(userId: string) {
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

		const compliments = await complimentsRepositories.find({
			where: { userReceiver: userId },
			// relations: ["userSenderRelation", "userReceiverRelation", "tagRelation"],
		});

		return compliments;
	}
}
