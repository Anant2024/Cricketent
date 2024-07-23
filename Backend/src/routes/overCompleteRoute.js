import {Router} from "express";
import { overComplete } from "../controllers/overComplete.js";
const router=Router();
router.route("/submitOver").post(overComplete)
export default router