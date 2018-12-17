"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbcontext_1 = require("./dbcontext");
var msg = "Hello World";
console.log(msg);
// Create Express server
const app = express_1.default();
// Connect to MongoDB
const dbcontext = new dbcontext_1.DbContext();
app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    // dbcontext.saveData();
    const data = yield dbcontext.queryThingsByCategory("book");
    console.log(data);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(data);
}));
const server = app.listen(4201, () => {
});
//# sourceMappingURL=index.js.map