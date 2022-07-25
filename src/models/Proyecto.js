import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const proyectoEsquema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    enlace: { type: String, required: true, trim: true },
    asignadoA: { type: Array, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
    tecnologias: { type: Array, required: true, trim: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
proyectoEsquema.plugin(mongoosePaginate);
export default model("Proyecto", proyectoEsquema);
