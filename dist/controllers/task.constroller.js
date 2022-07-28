"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.getAllTasks = exports.findOneTask = exports.findAllDoneTask = exports.deleteTask = exports.createTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

var _getPagination2 = require("../libs/getPagination");

var mensajeError = function mensajeError(res, text) {
  res.status(500).json({
    message: text
  });
};

var getAllTasks = function getAllTasks() {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$query, size, page, _getPagination, limit, offset, tasks;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, size = _req$query.size, page = _req$query.page;
              _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
              _context.next = 5;
              return _Task["default"].paginate({}, {
                offset: offset,
                limit: limit
              });

            case 5:
              tasks = _context.sent;
              res.json(tasks);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              mensajeError(res, "Something goes wrong retriving the tasks");

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.getAllTasks = getAllTasks;

var createTask = function createTask() {
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var newTask, taskSave;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (req.body.title) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", res.status(400).send({
                message: "El titulo no puede ser vacio"
              }));

            case 2:
              newTask = new _Task["default"]({
                title: req.body.title,
                description: req.body.description,
                done: req.body.done ? req.body.done : false
              });
              _context2.next = 5;
              return newTask.save();

            case 5:
              taskSave = _context2.sent;
              console.log(newTask);
              res.json("New task created");

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.createTask = createTask;

var findOneTask = function findOneTask() {
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var id, task;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.id;
              _context3.prev = 1;
              _context3.next = 4;
              return _Task["default"].findById(id);

            case 4:
              task = _context3.sent;

              if (task) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", res.status(404).json({
                message: "Task with id ".concat(id, " does not exists")
              }));

            case 7:
              console.log(task);
              res.json(task);
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);
              res.status(500).json({
                message: error.message || "Error retriving task with id: ".concat(id)
              });

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 11]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

exports.findOneTask = findOneTask;

var deleteTask = function deleteTask() {
  return /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _Task["default"].findByIdAndDelete(req.params.id);

            case 2:
              res.json({
                message: "".concat(req.params.id, " Tarea eliminada")
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
};

exports.deleteTask = deleteTask;

var findAllDoneTask = function findAllDoneTask() {
  return /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var tasks;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _Task["default"].find({
                done: true
              });

            case 2:
              tasks = _context5.sent;
              res.json(tasks);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }();
};

exports.findAllDoneTask = findAllDoneTask;

var updateTask = function updateTask() {
  return /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _Task["default"].findByIdAndUpdate(req.params.id, req.body);

            case 2:
              res.json({
                message: "Tarea actualizado"
              });

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }();
};

exports.updateTask = updateTask;