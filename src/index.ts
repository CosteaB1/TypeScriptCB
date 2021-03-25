//import multiply, { multiplyByTwo } from './multiply';
import multiply, { multiplyByTwo as mBy2, HeeloWorld } from './multiply';

import * as multiplyModule from './multiply';
const a = 2;
const b = 1;

console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
multiplyModule.multiplyByTwo(2);
mBy2(2);

// Boolean
let x: boolean = false; //true

// Number
let num: number = 1 + 0b1 + 0x1 + 0x1;
//String
const hello: string = 'Hello';
const world: string = "Wolrd";
const helloWolrd = `${hello} ${world}`;

//Null and Undefined
let n: null = null;
let u: undefined = undefined;

function uppercaseFirstLetter(str: string) {
    return str[0].toUpperCase() + str.substr(1);
}
console.log(uppercaseFirstLetter('hello'));

//Object 
type primitiveTypes = boolean | number | string | symbol | null | undefined;

// Void
function log(message: string): void {
    console.log(message);
}

//Array 
let array1: string[] = ['x', 'y'];
let array2: Array<string> = array1;

// Tuple 
let tuple: [string, number] = ['str', 1];

//Enum 
enum Color {
    Red = 2, Green, Blue
}
let myFavColor: Color = Color.Blue;
console.log(Color.Red, Color.Blue, Color.Green);
console.log(Color[2]);
//Any
let ANY: any;
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