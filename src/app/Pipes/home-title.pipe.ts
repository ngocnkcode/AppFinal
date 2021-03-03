import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeTitle'
})
export class HomeTitlePipe implements PipeTransform {

  transform(value: string, args:number): unknown {
    return value.substr(0, args) + "..."
  }

}
