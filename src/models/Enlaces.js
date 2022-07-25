//Codigo creado por Javier Bagatoli el 25/07/2022
import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const enlaceEsquema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    enlace: { type: String, required: true, trim: true },
    duracion: { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
enlaceEsquema.plugin(mongoosePaginate);
export default model("Enlace", enlaceEsquema);
