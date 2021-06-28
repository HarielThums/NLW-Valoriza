import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";
import { Request, Response } from "express";

export class ListUserSendComplimentsController {
	async handle(req: Request, res: Response) {
		const { userId } = req;

		const listUserSendComplimentsService = new ListUserSendComplimentsService();

		const compliments = await listUserSendComplimentsService.execute(
			userId
		);

		return res.json(compliments);
	}
}
