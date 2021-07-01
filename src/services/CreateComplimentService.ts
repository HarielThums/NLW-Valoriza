import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepostories';
import { UsersRepositories } from '../repositories/UserRepositories';

interface IComplimentRequest {
	tagId: string;
	userSender: string;
	userReceiver: string;
	message: string;
}

export class CreateComplimentService {
	async execute({ tagId, userSender, userReceiver, message }: IComplimentRequest) {
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
		const usersRepositories = getCustomRepository(UsersRepositories);

		if (userSender === userReceiver) throw new Error('Incorrect User Receiver, please try another.');

		const userReceiverValid = await usersRepositories.findOne(userReceiver);

		if (!userReceiverValid) throw new Error('User receiver does not exists');

		const compliment = complimentsRepositories.create({
			tagId,
			message,
			userReceiver,
			userSender,
		});

		await complimentsRepositories.save(compliment);

		return compliment;
	}
}
