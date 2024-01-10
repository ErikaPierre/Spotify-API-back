import { Router } from "express";
import { connexion, inscription } from "../controllers/userController";

const router = Router();

router.post("/inscription", inscription);
router.post("/connexion", connexion);



export default router;
