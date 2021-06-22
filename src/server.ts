// yarn add @types/express -D, forma de ter acesso ao auto complete do express... instalando todos os modulos extras dele
import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json())

app.use(router);

app.get("/", (request, response) => {
	// Request => entrando, response => saindo
	return response.send({ message: "NLW Start ATM!!" });
});

app.listen(3000, () => console.log("Server is running"));
