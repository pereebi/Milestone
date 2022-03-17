"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello World";
console.log(message);
// importing required dependencies
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
// express object
var app = (0, express_1.default)();
// port decleared
var PORT = 5050;
// get method
app.use('/api', routes_1.default);
// listening on the port
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
