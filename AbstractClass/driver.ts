import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectange } from "./rectange";

let myCircle = new Circle(5,10,20);
console.log(myCircle.getInfo());
let myRectangle = new Rectange(0,0,10,20);
console.log(myRectangle.getInfo());

//declare an array of shapes
let theShape:Shape[] = [];

//add the shapes to array
theShape.push(myCircle);
theShape.push(myRectangle);

for(let tempShape of theShape){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
