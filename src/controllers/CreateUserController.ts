import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const createUserService = new CreateUserService();

        const { name, email, admin, password } = request.body;

        const user = await createUserService.execute({ name, email, admin, password });

        return response.json(user);
    }
}
