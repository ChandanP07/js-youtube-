
// in object forin loop works
const myObject = {
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shorcut is for ${myObject[key]} `);
    
}

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(programming[key]);
    
}

// const map = new Map()                           // maps are not iterable so only forof will work

// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('Fr',"France")

// for (const key in map) {
//     console.log(key)
// }

