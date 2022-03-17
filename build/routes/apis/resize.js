"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeRoute = express_1.default.Router();
resizeRoute.get('/resize', function (req, res) {
    res.send('Resizing from this route');
});
exports.default = resizeRoute;
