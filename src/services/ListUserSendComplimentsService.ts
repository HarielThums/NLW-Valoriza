import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepostories";

export class ListUserSendComplimentsService {
	async execute(userId: string) {
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

		const compliments = await complimentsRepositories.find({
			where: { userSender: userId },
			// relations: ["userSenderRelation", "userReceiverRelation", "tagRelation"],
		});

		return compliments;
	}
}
