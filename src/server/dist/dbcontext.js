"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const assert = require("assert");
class DbContext {
    constructor() {
        this.mongoUrl = "mongodb://localhost:27017";
    }
    operate(func) {
        mongodb_1.MongoClient.connect(this.mongoUrl, { useNewUrlParser: true }, (err, client) => {
            assert.equal(err, null);
            func(client);
            client.close();
        });
    }
    saveData() {
        this.operate((client) => {
            client.db("things").collection("things").insertOne({
                item: "canvas",
                qty: 100,
                tags: ["cotton", "plastic"],
                size: { h: 28, w: 35.5, uom: "cm" }
            });
        });
    }
    queryThingsByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this.operate((client) => {
                        var cursor = client.db("things").collection("things").find({ "category": `${category}` });
                        resolve(cursor.toArray());
                    });
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
    createTemplate(template) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this.operate((client) => {
                        resolve(client.db("things").collection("templates").insertOne(template));
                    });
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
    deleteTemplate(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this.operate((client) => {
                        resolve(client.db("things").collection("templates").deleteOne({ "category": `${category}` }));
                    });
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
    updateTemplate(template) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this.operate((client) => {
                        resolve(client.db("things").collection("templates").updateOne({ "category": `${template.category}` }, template));
                    });
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
    queryTemplate(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this.operate((client) => {
                        resolve(client.db("things").collection("templates").find({ "category": `${category}` }));
                    });
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
}
exports.DbContext = DbContext;
//# sourceMappingURL=dbcontext.js.map