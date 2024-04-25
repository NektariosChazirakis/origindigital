import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToText',
  standalone: true
})
export class BooleanToTextPipe implements PipeTransform {

  transform(value: unknown, outputNames: string[]): string | null {
    if (typeof value !== 'boolean') {
      return null;
    }
    if (outputNames.length !== 2) {
      return null;
    } else {
      return value ? outputNames[0] : outputNames[1]
    }

  }

}
