// Primitive

// 7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100; // ==> number
const scoreValue = 100.5;       // ==> number

const isLoggedIn = false;       // ==> boolean
const outsideTemp = null;       // ==> null
let userEmail;

const id = Symbol("123");       // ==> symbol
const anotherid = Symbol("123");

// console.log(id === anotherid);   // false

const bigNumber = 235465721326589844561n;    // ==> bigint

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["batman", "superman", "wonderwoman"];  // ==> object

let myObj = {           // ==> object
  name: "John",
  age: 30,
};

const myFunction = function () {    // ==> function 
  console.log("Hello World");
};

console.log(typeof myFunction);
