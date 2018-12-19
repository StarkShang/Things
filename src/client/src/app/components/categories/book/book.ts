import { Thing } from "src/app/models/thing";

export class Book extends Thing {
    public authors: string[];
    public translators: string[];
    public publisher: string;
    public isbn: string;
    public publishDate: string;
    public coverImageUrl: string;

    constructor() {
        super();
        this.tags = ["book"];
    }
}
