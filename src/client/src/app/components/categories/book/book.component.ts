import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";
import { HttpService } from "src/app/services/http.service";
import { OwnedBook } from "./OwnedBook";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;
  books: OwnedBook[];

  constructor(public service: HttpService) { }

  ngOnInit() {
    this.books = [{
        name: "CLR via C#", authors: ["Jeffrey Richter"], translators: ["周靖"], publisher: "清华大学出版社", publishDate: "2017-1", isbn: "978-7-302-38097-9",
        coverImageUrl: "https://img12.360buyimg.com/n4/jfs/t592/202/456590821/98535/18de523d/546b126cNda1ef951.jpg", tags: ["计算机"], category: "book"
      }, {
        name: "CLR via C#", authors: ["Jeffrey Richter"], translators: [], publisher: "清华大学出版社", publishDate: "2017-1", isbn: "978-7-302-38097-9",
        coverImageUrl: "https://img12.360buyimg.com/n4/jfs/t592/202/456590821/98535/18de523d/546b126cNda1ef951.jpg", tags: [], category: "book"
      }, {
        name: "CLR via C#", authors: ["Jeffrey Richter"], translators: ["周靖"], publisher: "清华大学出版社", publishDate: "2017-1", isbn: "978-7-302-38097-9",
        coverImageUrl: "https://img12.360buyimg.com/n4/jfs/t592/202/456590821/98535/18de523d/546b126cNda1ef951.jpg", tags: [], category: "book"
      },
    ];
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }

}
