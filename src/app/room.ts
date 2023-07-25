import { Time } from "@angular/common";

export interface Room {
    id:number,
    type:string,
    price:number,
    amenities:string[],
    checkOutTime?:Date,
    chekInTime?:Date,
    
}
