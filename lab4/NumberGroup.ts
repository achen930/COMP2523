import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable {
    data: number[];
    get length(): number { // logic 
    };
    swap(leftPos: number, rightPos: number):void { // logic 
    };
    compare(leftPos: number, rightPos: number): boolean { // logic 
    };
}