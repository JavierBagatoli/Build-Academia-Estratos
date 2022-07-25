import Documentacion from "../models/Documentacion";
import { getPagination } from "../libs/getPagination";

// Creado por Joan Salas 25/07

export const obtenerDocumentaciones = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const documentaciones = await Documentacion.paginate({}, { offset, limit });
    res.status(200).json(documentaciones);
  } catch (e) {
    mensajeError(res, "Fallo al obtenerse las documentaciones");
  }
};
