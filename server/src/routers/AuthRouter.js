import AuthController from "../controllers/AuthController";
import { Router } from "express"

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

export default router;