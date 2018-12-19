import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-template",
  templateUrl: "./edit-template.component.html",
  styleUrls: ["./edit-template.component.css"]
})
export class EditTemplateComponent implements OnInit {
  public language = "zh-cn";
  public languages: [
    { key: "zh-cn", value: "中文"},
    { key: "en-us", value: "English"}
  ];
  public template: any;
  public propertyMeta: {
    "zh-cn": { name: "字段名", viewname: "显示名", type: "数据类型" },
    "en-us": { name: "字段名", viewname: "显示名", type: "数据类型" },
  };
  public types = [
    "text",
    "number",
    "month"
  ];
  constructor() {
    this.template = {
      name: { ename: "book", cname: "书"},
      meta: {
        name: "字段名",
        viewname: "显示名",
        type: "数据类型"
      },
      language: "chinese-simple",
      properties: [
        {
          name: "name", viewname: "书名", type: "text"},
        { name: "isbn", viewname: "ISBN", type: "text"},
        { name: "authors", viewname: "作者", type: "text"},
        { name: "translator", viewname: "译者", type: "text"},
      ]
    };
  }

  ngOnInit() {
  }

}
