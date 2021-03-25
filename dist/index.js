"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import multiply, { multiplyByTwo } from './multiply';
const multiply_1 = require("./multiply");
const multiplyModule = __importStar(require("./multiply"));
const a = 2;
const b = 1;
console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
multiplyModule.multiplyByTwo(2);
multiply_1.multiplyByTwo(2);
// Boolean
let x = false; //true
// Number
let num = 1 + 0b1 + 0x1 + 0x1;
//String
const hello = 'Hello';
const world = "Wolrd";
const helloWolrd = `${hello} ${world}`;
//Null and Undefined
let n = null;
let u = undefined;
function uppercaseFirstLetter(str) {
    return str[0].toUpperCase() + str.substr(1);
}
console.log(uppercaseFirstLetter('hello'));
// Void
function log(message) {
    console.log(message);
}
//Array 
let array1 = ['x', 'y'];
let array2 = array1;
// Tuple 
let tuple = ['str', 1];
//Enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
let myFavColor = Color.Blue;
console.log(Color.Red, Color.Blue, Color.Green);
console.log(Color[2]);
//Any
let ANY;
ANY = 'a string';
ANY = 1;
ANY = true;
// Type Asserions
// const email = document.getElementById('email');
// if (email) {
//     email.addEventListener('change', e => {
//         const input = e.currentTarget as HTMLInputElement;
//         console.log(input.value);
//     })
// }
