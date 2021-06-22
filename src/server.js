"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// yarn add @types/express -D, forma de ter acesso ao auto complete do express... instalando todos os modulos extras dele
var app = express_1.default();
app.listen(3000, function () { return console.log("Server is running"); });
