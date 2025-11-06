import express from "express";
import { signup, login, logout, getMe } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Définition des routes :
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);

// Export du routeur pour l’utiliser dans server.js :
export default router;