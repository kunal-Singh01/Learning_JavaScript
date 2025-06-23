const accountId=12323
let accountEmail="xyz@gmail.com"
var accountPassword="12345"
accountCity="Mathura"
let accountState

// accountId=12323 //not allowed 
accountEmail="abc@123gmail.com"
accountPassword="1212"
accountCity="Delhi"

/*
    prefer not to use var
    because of issue in scope(block & functional)
*/


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
