import Documentacion from "../models/Documentacion"
import { getPagination } from "../libs/getPagination"

// Creado por Joan Salas 25/07

export const obtenerTodas = async (req, res) => {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size)
    const documentaciones = await Documentacion.paginate({}, { offset, limit })
    res.status(200).json(documentaciones);
}