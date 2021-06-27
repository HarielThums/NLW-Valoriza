import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";


interface IUserRequest {
	name: string;
	email: string;
	password: string;
	admin?: boolean;
}

export class CreateUserService {
	async execute({ name, email, admin = false, password }: IUserRequest) {
		const usersRepository = getCustomRepository(UsersRepositories);

		if (!email) throw new Error("Email incorrect");

		const userAlreadyExists = await usersRepository.findOne({ email });

		if (userAlreadyExists) throw new Error("User already exists");

		const passwordHash = await hash(password, 10);

		const user = usersRepository.create({
			name,
			email,
			admin,
			password: passwordHash,
		});

		await usersRepository.save(user);

		return user ;
	}
}
