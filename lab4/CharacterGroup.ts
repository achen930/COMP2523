import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
    data: string;
    get length(): number { // logic 
    };
    swap(leftPos: number, rightPos: number):void { // logic 
    };
    compare(leftPos: number, rightPos: number): boolean { // logic 
    };
}