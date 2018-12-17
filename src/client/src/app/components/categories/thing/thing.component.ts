import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-thing",
  templateUrl: "./thing.component.html",
  styleUrls: ["./thing.component.css"]
})
export class ThingComponent implements OnInit {
  things: Array<any>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // const data = this.httpService.getThingsOfCategory().subscribe(
    //   things => {
    //     this.things = [];
    //     for (const thing of things) {
    //       const th: Array<Property> = [];
    //       for (const property in thing) {
    //         if (property !== "_id" && thing.hasOwnProperty(property)) {
    //           const value = thing[property];
    //           if (value instanceof Array) {
    //             th.push(new Property(property, value.join(",")));
    //           } else {
    //             th.push(new Property(property, value));
    //           }
    //         }
    //       }
    //       this.things.push(th);
    //     }
    //     console.log(things);
    //   }
    // );
    // localStorage.setItem("name", "stark");
  }

}
