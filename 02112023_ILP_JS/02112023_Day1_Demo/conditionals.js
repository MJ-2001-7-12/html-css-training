let fname="";
let lname="";
let nickname="shambu";
let activename=""
let activeName = fname ||lname||nickname||"Anon";
console.log(activeName)

let activeName1 = fname && lname&& nickname && "Anon";
console.log(activeName1)

console.log(!false)
console.log(!0) //true
console.log(!!0) //false