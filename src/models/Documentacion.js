//Codigo creado por Javier Bagatoli el 25/07/2022

import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const documentacionEsquema = new Schema(
  {
    titulo: { type: String, required: true, trim: true },
    especialidad: { type: String, required: true, trim: true },
    tema: { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
    enlaces: { type: Array, required: true, trim: true },
    autor: { type: String, required: true, trim: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
documentacionEsquema.plugin(mongoosePaginate);
export default model("Documentacion", documentacionEsquema);
