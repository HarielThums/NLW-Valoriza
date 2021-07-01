import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';

export class CreateComplimentController {
	async handle(req: Request, res: Response) {
		const { tagId, userReceiver, message } = req.body;
		const { userId } = req;

		const createComplimentService = new CreateComplimentService();

		const compliment = await createComplimentService.execute({
			tagId,
			userSender: userId,
			userReceiver,
			message,
		});

		return res.json(compliment);
	}
}
