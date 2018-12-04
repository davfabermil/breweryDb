import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value) return null;
        if (!args) return value;
    
        args = args.toLowerCase();

        return value.filter(function (item) {
            let itemValues = Object.values(item);
            return JSON.stringify(itemValues).toLowerCase().includes(args);
          });
     



    }
    

}