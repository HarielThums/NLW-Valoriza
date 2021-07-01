import { CreateUserService } from '../services/CreateUserService';
import { Request, Response } from 'express';
import { classToPlain } from 'class-transformer';

export class CreateUserController {
	async handle(req: Request, res: Response) {
		const createUserService = new CreateUserService();

		const { name, email, admin, password } = req.body;

		const user = await createUserService.execute({
			name,
			email,
			admin,
			password,
		});

		return res.json(classToPlain(user)); //removendo o retorno da senha ao criar user
	}
}
