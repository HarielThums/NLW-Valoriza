import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
// import secret from "../config/secret.json";
const secret = '5044b7355d91fb1f0626e9129373493b';

interface Credentials {
	email: string;
	password: string;
}

export class AuthenticateUserService {
	async execute({ email, password }: Credentials) {
		const usersRepositories = getCustomRepository(UsersRepositories);

		const user = await usersRepositories.findOne({ email });

		if (!user) throw new Error('Email or Password incorrect');

		const isValid = await compare(password, user.password);

		if (!isValid) throw new Error('Email or Password incorrect');

		const token = sign({ email: user.email }, secret, {
			subject: user.id,
			expiresIn: '1d',
		});

		return token;
	}
}
