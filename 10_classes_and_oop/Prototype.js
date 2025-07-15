// let myName = "chandan       "

// console.log(myName.truelength);


let myHero = ["Thor", "Spiderman"]

let heroPower ={
    thor :"hammer",
    spiderman:"sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.chandan = function(){
    console.log(`chandan is present in all objects`);
}

Array.prototype.heyChandan = function(){
    console.log(`Chandan says hello`);
    
}
// heroPower.chandan()
// myHero.chandan()
// myHero.heyChandan()
// heroPower.heyChandan()


//  inheritance

const User = {
    name: "chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime :true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//  modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName= "Dhrumi        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);   
}

anotherUserName.trueLength()
"Chandan".trueLength()
"iceTea".trueLength()
