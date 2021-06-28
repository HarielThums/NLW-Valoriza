import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
	const { userId } = req

	const usersRepositories = getCustomRepository(UsersRepositories)

	const { admin } = await usersRepositories.findOne(userId)

	if (admin) return next();

	return res.status(401).json({ error: "Unauthorized" });
}
