"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

//Codigo creado por Javier Bagatoli el 25/07/2022
var usuarioEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  pais: {
    type: String,
    required: true,
    trim: true
  },
  ciudad: {
    type: String,
    required: true,
    trim: true
  },
  fechaNacimiento: {
    type: Number,
    required: true,
    trim: true
  },
  correo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  cargo: {
    type: String,
    required: true,
    trim: true
  },
  //Practicante, Trainee o Contratado
  especialidad: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
usuarioEsquema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)("Usuario", usuarioEsquema);

exports["default"] = _default;