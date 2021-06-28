import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
	sub: string;
}

export function ensureAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const AuthToken = req.headers.authorization;

	if (!AuthToken) return res.status(401).end();

	const [bearer, token] = AuthToken.split(" ");

	try {
		const { sub } = verify(
			token,
			"5044b7355d91fb1f0626e9129373493b"
		) as IPayLoad;

		req.userId = sub;
	} catch (error) {
		return res.status(401).end();
	}

	return next();
}
