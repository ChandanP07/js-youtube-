// singleton

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Chandan",
  "full name": "Chandan Prajapati",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "chandan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "batman@gmail.com";
// Object.freeze(JsUser)
JsUser.email = "spiderman@gmail.com";
// console.log(JsUser)


JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())