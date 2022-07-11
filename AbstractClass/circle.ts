import { Shape } from "./shape";

export class Circle extends Shape{
    calculateArea(): number {
       return Math.PI *Math.pow(this._radius,2);
    }

    constructor(thex:number,they:number,
        private _radius: number){
            super(thex,they)
        }

        public get radius(): number {
            return this._radius;
        }
        public set radius(value: number) {
            this._radius = value;
        } 

        getInfo(): string {
            return super.getInfo() + 'radius = ${this._radius}';
        }
}