let a = 300

if (true) {
  let a = 100;
  const b = 20;
//   console.log("INNNER :",a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="Chandan"

    function two(){
        const website="youtube"
        console.log(username);
    }
    console.log(website);
    // two();
    
}

// one()


if (true){
  const username="Chandan"
  if(username==="Chandan"){
    const website="youtube"
    console.log(username +website);
  }
  // console.log(website);
}



// ++++++++++++++++++++ interesting ++++++++++++++++++++++++


console.log(addone(5))
function addone(num){
  return num+1
}


const addTwo = function(num){
  return num + 2
}
// console.log(addTwo(5))
