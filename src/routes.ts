import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { ListUserReceiveComplimentsController } from "./controllers/UserReceiverComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/UserSenderComplimentsController";
import { ListTagsController } from "./controllers/ListTagController";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController()

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post( "/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get("/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle)

export { router };
