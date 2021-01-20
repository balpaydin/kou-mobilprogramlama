import UserController from "../controllers/UserController";
import { Router } from "express"
import authCheck from "../middleware/auth"
const router = Router();

router.get("/user/:id", UserController.get);
router.get("/user/s/:username", UserController.getUsersByUsername);
router.get("/user/homeworks/get", authCheck, UserController.getHomeworks);

export default router;