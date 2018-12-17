import { MongoClient, Db, Collection } from "mongodb";
import assert = require("assert");

export class DbContext {
    private mongoUrl = "mongodb://localhost:27017";

    constructor() {
    }

    private operate(func: Function) {
        MongoClient.connect(this.mongoUrl, { useNewUrlParser: true }, (err, client) => {
            assert.equal(err, null);
            func(client);
            client.close();
        });
    }
    public saveData() {
        this.operate((client: MongoClient) => {
            client.db("things").collection("things").insertOne({
                item: "canvas",
                qty: 100,
                tags: [ "cotton", "plastic" ],
                size: { h: 28, w: 35.5, uom: "cm" }
            })
        });
    }
    public async queryThingsByCategory(category: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.operate((client: MongoClient) => {
                    var cursor = client.db("things").collection("things").find({ "category": `${category}` });
                    resolve(cursor.toArray());
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    public async createTemplate(template: any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.operate((client: MongoClient) => {
                    resolve(client.db("things").collection("templates").insertOne(template));
                });
            } catch (err) {
                reject(err);
            }
        });
    }
    public async deleteTemplate(category: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.operate((client: MongoClient) => {
                    resolve(client.db("things").collection("templates").deleteOne({ "category": `${category}` }));
                });
            } catch (err) {
                reject(err);
            }
        })
    }
    public async updateTemplate(template: any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.operate((client: MongoClient) => {
                    resolve(client.db("things").collection("templates").updateOne(
                        { "category": `${template.category}` },
                        template));
                });
            } catch (err) {
                reject(err);
            }
        })
    }
    public async queryTemplate(category: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.operate((client: MongoClient) => {
                    resolve(client.db("things").collection("templates").find({ "category": `${category}` }));
                });
            } catch (err) {
                reject(err);
            }
        })
    }
}