import ResponseController from "../controllers/ResponseController";
import { Router } from "express";
import authCheck from "../middleware/auth";

const router = Router();

router.post("/response/add", authCheck, ResponseController.add);
router.get("/response/get/:id", ResponseController.get);
router.get("/response/getByQuery", authCheck, ResponseController.getByQuery);
router.get("/response/getByHomeworkId/:id", ResponseController.getByHomeworkId);

export default router;