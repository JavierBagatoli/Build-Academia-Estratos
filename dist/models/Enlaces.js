"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

//Codigo creado por Javier Bagatoli el 25/07/2022
var enlaceEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  enlace: {
    type: String,
    required: true,
    trim: true
  },
  duracion: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
enlaceEsquema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)("Enlace", enlaceEsquema);

exports["default"] = _default;