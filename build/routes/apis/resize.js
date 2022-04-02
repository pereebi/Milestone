"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("../../resize"));
var resizeRoute = express_1.default.Router();
resizeRoute.get('/resize', function (req, res) {
    res.send(resize_1.default);
});
exports.default = resizeRoute;
