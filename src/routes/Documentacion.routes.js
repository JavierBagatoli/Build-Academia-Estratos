import { Router } from "express";
import * as documentacionController from "../controllers/documentacion.controller";

// Creado por Joan Salas 25/07
const router = Router();

router.get("/:id", documentacionController.encontrarDocumento);
router.put("/:id", documentacionController.actualizarDocumentacion);
router.get("/", documentacionController.obtenerDocumentaciones);
router.delete("/:id", documentacionController.eliminarDocumentacion);
router.post("/", documentacionController.crearDocumentacion);


export default router;