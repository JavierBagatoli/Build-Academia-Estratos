"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _Documentacion = _interopRequireDefault(require("./routes/Documentacion.routes"));

var app = (0, _express["default"])(); //Settings

app.set("port", process.env.PORT || 3000); //middlewares

app.use((0, _cors["default"])()); //En vacio es * si no corresponde poner origin: ""

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //Rutas

app.get("/", function (req, res) {
  res.json({
    message: "hola"
  });
});
app.use("/api/documentaciones", _Documentacion["default"]);
var _default = app;
exports["default"] = _default;