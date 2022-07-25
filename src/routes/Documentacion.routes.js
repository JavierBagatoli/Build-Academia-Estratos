import { Router } from "express";
import * as documentacionController from "../controllers/documentacion.controller";

// Creado por Joan Salas 25/07
const router = Router();

router.get("/", documentacionController.obtenerDocumentaciones);

// TODO: terminar estas rutas
// router.post("/", createTask())

// router.get("/:id", findOneTask())

// router.delete("/:id", deleteTask())

// router.put("/:id", updateTask())

export default router;
