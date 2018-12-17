import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  private url = "http://localhost:4201";
  constructor(private http: HttpClient) { }

  getThingsOfCategory(category: string = ""): Observable<any> {
    return this.http.get(`${this.url}/${category}`);
  }
}
