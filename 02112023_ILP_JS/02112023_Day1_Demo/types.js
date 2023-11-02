//concatenation
const fname="Hari";
const lname="Prasad";
const fullname=fname+" "+lname;
console.log(fullname);
console.log(`Hello ${fname} ${lname}`);

age=20;
console.log(fname+age);
console.log(""+age);

const age2="21"; // unary operator + to convert string to number
console.log(+age2);
//OR 
console.log(+Number(age2)); //similarly String() Boolean()

const age3='a';
console.log(+age3); //not a number

console.log("11"+1); //string concat avum  111
console.log("11"-1); // but why?           10
console.log(2+2+"1");   //                 41
console.log('1'+2+2);   //                 122

console.log(6-'2')  //4
console.log("6"/"2")  //3

console.log("UPPERCASE".toLowerCase())
console.error(("b"+"a"+ +"a"+"a").toLowerCase())  //the third +"a" becomes NaN

console.log("10" == 10); //loose equality
console.log("10" === 10); //strict equality



let year = prompt("Enter a year");
console.log(year);

let agenow = prompt("Enter age");
if(agenow>18){
    console.log("Adult")
}
else{
    console.log("Child")
}
