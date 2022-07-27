//Codigo creado por Javier Bagatoli el 25/07/2022
import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const usuarioEsquema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    apellido: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    pais: { type: String, required: true, trim: true },
    ciudad: { type: String, required: true, trim: true },
    fechaNacimiento: { type: Number, required: true, trim: true },
    correo: { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
    cargo: { type: Boolean, required: true, trim: true }, //Practicante, Trainee o Contratado
    especialidad: { type: String, required: true, trim: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
usuarioEsquema.plugin(mongoosePaginate);
export default model("Usuario", usuarioEsquema);
