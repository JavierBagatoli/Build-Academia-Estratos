"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

//Codigo creado por Javier Bagatoli el 25/07/2022
var documentacionEsquema = new _mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  especialidad: {
    type: String,
    required: true,
    trim: true
  },
  tema: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  enlaces: {
    type: Array,
    required: true,
    trim: true
  },
  autor: {
    type: String,
    required: true,
    trim: true
  },
  esVideo: {
    type: Boolean,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
documentacionEsquema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)("Documentacion", documentacionEsquema);

exports["default"] = _default;