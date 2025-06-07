// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Stark";
tinderUser.isloggedin = false;

// console.log(tinderUser);

const regularUser = {
  email: "example@gmail.com",
  fullname: {
    userFullname: {
      firstname: "Hitesh",
      lastname: "Choudhary",
    },
  },
};

// console.log(regularUser.fullname.userFullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3={obj1,obj2};

// const obj3=Object.assign({},obj1,obj2);

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "example@gmail.com",
  },
  {
    id: 1,
    email: "example@gmail.com",
  },
  {},
  {},
];

// users[1].email

console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isloggedin'))



const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"chandan"
}

// course.courseInstructor

// const {courseInstructor:Instructor} = course

// console.log(courseInstructor)
// console.log(Instructor)


// const navbar = ({company}) => {

// }

// navbar(company = "facebook")


// API  

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free",
// }
// [
//     {},
//     {},
//     {}
// ]

