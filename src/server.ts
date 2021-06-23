// yarn add @types/express -D, forma de ter acesso ao auto complete do express... instalando todos os modulos extras dele
import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import { errorMiddleware } from "./middleware/error";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

//middleware pra tratativas de erros com : 'express-async-errors'
app.use(errorMiddleware);

app.listen(3000, () => console.log("Server is running"));
