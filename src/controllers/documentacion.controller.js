import Documentacion from "../models/Documentacion";
import { getPagination } from "../libs/getPagination";

// Creado por Joan Salas 25/07
// Modificado por Javier Bagatoli 25/07

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

export const encontrarDocumento = () => async (req, res) => {
  const { id } = req.params;
  try {
    const documento = await Task.findById(id);

    if (!documento)
      return res.status(404).json({
        message: `El documento ${id} no existe`,
      });
    res.json(documento);
  } catch (err) {
    res.status(500).json({
      message: error.message || `Error trayendo documento: ${id}`,
    });
  }
};

export const eliminarDocumentacion = () => async (req, res) => {
  try {
    await Documentacion.findByIdAndDelete(req.params.id);
    res.json({ message: `${req.params.id} documento eliminado` });
  } catch (e) {
    res.status(500).json({
      message: error.message || `Error eliminando documento: ${id}`,
    });
  }
};
