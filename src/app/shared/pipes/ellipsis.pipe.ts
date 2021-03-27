import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = value;
    return temporalDivElement.firstChild.textContent;
  }

}
