import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService';
import { Request, Response } from 'express';

export class ListUserReceiveComplimentsController {
	async handle(req: Request, res: Response) {
		const { userId } = req;

		const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

		const compliments = await listUserReceiveComplimentsService.execute(userId);

		return res.json(compliments);
	}
}
