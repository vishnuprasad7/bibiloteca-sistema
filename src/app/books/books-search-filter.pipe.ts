import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'books-search-filter',
})
export class BookSearchFilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {}
  //   transform(values: any, key?: string): [] {
  //     // debugger;
  //     // if (!key) return values;
  //     // key = key.trim().toLowerCase();
  //     // return values.filter((val: string) => val.title.toLowerCase() === key);
  //   }
}
