const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);


// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

// const mynewObject= Object.create(null)

const car = {
    type: "Suv",
    price: 1000000,
    isAvailable:true,

    orderCar : function(){
        console.log("car nahi hai");
        
    }
}

// console.log(car);
console.log(Object.getOwnPropertyDescriptor(car,"type"));

Object.defineProperty(car,"type", {
    // writable:false,
    enumerable:false,
})

console.log(Object.getOwnPropertyDescriptor(car,"type"));

for (let [key,value] of Object.entries(car)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    } 
}
