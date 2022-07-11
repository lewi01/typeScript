"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var rectange_1 = require("./rectange");
var myShape = new shape_1.Shape(10, 15);
console.log(myShape.getInfo());
var myCircle = new circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
var myRectangle = new rectange_1.Rectange(0, 0, 10, 20);
console.log(myRectangle.getInfo());
//declare an array of shapes
var theShape = [];
//add the shapes to array
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectangle);
for (var _i = 0, theShape_1 = theShape; _i < theShape_1.length; _i++) {
    var tempShape = theShape_1[_i];
    console.log(tempShape.getInfo());
}
