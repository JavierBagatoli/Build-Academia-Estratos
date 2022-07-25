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

// TODO JS: Crear y actualizar

export const crearDocumentacion = async (req, res) => {
    try {
        const datos = req.body
        //TODO JS: Validar datos
        const nuevaDocumentacion = new Documentacion(datos)
        const documentacionCreada = await nuevaDocumentacion.save()
        res.status(201).json(documentacionCreada)
    } catch (e) {
        res.json(e)
    }
}

export const actualizarDocumentacion = async (req, res) => {
    try {
        const datosActualizados = await Usuario.findByIdAndUpdate(req.body.id, req.body)
        resp.json(datosActualizados)
    } catch (error) {
        resp.status(404).json({ mensaje: error })
    }
}
