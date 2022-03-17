"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("./apis/resize"));
var routes = express_1.default.Router();
var logger = function (req, res, next) {
    var vistedRoute = ("".concat(req.url, " was visted"));
    console.log(vistedRoute);
    next();
};
routes.use('/', logger, resize_1.default);
exports.default = routes;
