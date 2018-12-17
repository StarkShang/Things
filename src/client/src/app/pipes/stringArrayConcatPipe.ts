import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "stringArrayConcat"})
export class StringArrayConcatPipe implements PipeTransform {
  transform(strArray: string[]): string {
    return strArray.join(", ");
  }
}
