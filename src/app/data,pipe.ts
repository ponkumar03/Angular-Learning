import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: "append",
    pure: false
    }) 

export class AppendPipe implements PipeTransform{
    transform(value: any, text: any) {
        return value + text;
        
    }
}

@Pipe ({
    name: "filter"
    }) 

    export class FilterPipe implements PipeTransform {
        transform(value: any[], field: string, filterValue: any): any[] {
            if (value && value.length > 0) {
                return value.filter((x: { [key: string]: any }) => x[field] == filterValue);
            } else {
                return [];
            }
        }
    }