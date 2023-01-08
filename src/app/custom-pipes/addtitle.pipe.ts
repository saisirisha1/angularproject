import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtitle'
})
export class AddtitlePipe implements PipeTransform {

  transform(value: string, gender: string) {

    if(gender === 'male'){
    return 'Mr. ' + value;
  }
    return 'Miss. ' + value;
  
}
}
