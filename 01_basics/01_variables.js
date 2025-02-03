const accountId = 14453;
let accountEmail = "Chandan@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

// accountId=2

accountEmail = "batman@gmail.com"
accountPassword="123456"
accountCity="Gotham"

console.log(accountId)


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])