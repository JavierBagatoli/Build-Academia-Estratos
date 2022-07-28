"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerDocumentaciones = exports.encontrarDocumento = exports.eliminarDocumentacion = exports.crearDocumentacion = exports.actualizarDocumentacion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Documentacion = _interopRequireDefault(require("../models/Documentacion"));

var _getPagination2 = require("../libs/getPagination");

// Creado por Joan Salas 25/07
// Modificado por Javier Bagatoli 25/07
var obtenerDocumentaciones = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, _getPagination, limit, offset, documentaciones;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("funciona el get");
            _context.prev = 1;
            _req$query = req.query, size = _req$query.size, page = _req$query.page;
            _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 6;
            return _Documentacion["default"].paginate({}, {
              offset: offset,
              limit: limit
            });

          case 6:
            documentaciones = _context.sent;
            res.status(200).json(documentaciones);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            mensajeError(res, "Fallo al obtenerse las documentaciones");

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function obtenerDocumentaciones(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.obtenerDocumentaciones = obtenerDocumentaciones;

var encontrarDocumento = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, documento;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Documentacion["default"].findById(id);

          case 4:
            documento = _context2.sent;

            if (documento) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "El documento ".concat(id, " no existe")
            }));

          case 7:
            res.json(documento);
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: error.message || "Error trayendo documento: ".concat(id)
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function encontrarDocumento(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Verificar borrado de un objeto no existente


exports.encontrarDocumento = encontrarDocumento;

var eliminarDocumentacion = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Documentacion["default"].findByIdAndDelete(req.params.id);

          case 3:
            res.json({
              message: "".concat(req.params.id, " documento eliminado")
            });
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: error.message || "Error eliminando documento: ".concat(id)
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function eliminarDocumentacion(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.eliminarDocumentacion = eliminarDocumentacion;

var crearDocumentacion = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var datos, nuevaDocumentacion, documentacionCreada;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            datos = req.body; //TODO JS: Validar datos

            nuevaDocumentacion = new _Documentacion["default"](datos);
            _context4.next = 5;
            return nuevaDocumentacion.save();

          case 5:
            documentacionCreada = _context4.sent;
            res.status(201).json(documentacionCreada);
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            res.json(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function crearDocumentacion(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.crearDocumentacion = crearDocumentacion;

var actualizarDocumentacion = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var datosActualizados;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Documentacion["default"].findByIdAndUpdate(req.params.id, req.body);

          case 3:
            _context5.next = 5;
            return _Documentacion["default"].findById(req.params.id);

          case 5:
            datosActualizados = _context5.sent;
            res.json(datosActualizados);
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            res.status(404).json({
              mensaje: _context5.t0
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function actualizarDocumentacion(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.actualizarDocumentacion = actualizarDocumentacion;