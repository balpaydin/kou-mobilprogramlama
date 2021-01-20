import HomeworkController from "../controllers/HomeworkController";
import { Router } from "express";

const router = Router();

router.post("/homework/add", HomeworkController.add);
router.get("/homework/get/:id", HomeworkController.get);
router.get("/homework/delete/:id", HomeworkController.remove);

export default router;