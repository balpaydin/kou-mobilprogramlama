import ClassController from "../controllers/ClassController";
import { Router } from "express"
import authCheck from "../middleware/auth";

const router = Router();

router.post("/class", authCheck, ClassController.add);
router.get("/class/get/:id", ClassController.get);
router.get("/class/getByRegisterId", authCheck, ClassController.getClassesByRegisterId);
router.get("/classes", ClassController.list);
router.post("/class/addUser", ClassController.addUser);
router.post("/class/removeUser", ClassController.removeUser);
router.get("/class/getByUserId", authCheck, ClassController.getClassesByUserId);
router.get("/class/homeworks/:id", ClassController.getHomeworkByClassId);

export default router;