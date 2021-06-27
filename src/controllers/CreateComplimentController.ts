import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

export class CreateComplimentController {
	async handle(req: Request, res: Response) {
		const { tagId, userSender, userReceiver, message } = req.body;

		const createComplimentService = new CreateComplimentService();

		const compliment = await createComplimentService.execute({
			tagId,
			userSender,
			userReceiver,
			message,
		});

		return res.json(compliment)
	}
}
