"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const assert = require("assert");
class DbContext {
    constructor() {
        this.mongoUrl = "mongodb://localhost:27017";
        mongodb_1.MongoClient.connect(this.mongoUrl, { useNewUrlParser: true }, (err, client) => {
            assert.equal(err, null);
            this.client = client;
            this.database = client.db("things");
            this.collection = this.database.collection("things");
        });
    }
    saveData() {
        this.collection.insertOne({
            item: "canvas",
            qty: 100,
            tags: ["cotton", "plastic"],
            size: { h: 28, w: 35.5, uom: "cm" }
        });
    }
    close() {
        this.client.close();
    }
}
exports.DbContext = DbContext;
//# sourceMappingURL=database.js.map