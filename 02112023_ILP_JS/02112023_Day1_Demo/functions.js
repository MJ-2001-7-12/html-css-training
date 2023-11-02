

//Arrow function
const add =(a,b) => a+b;
OR 
const adding =(a,b) =>{
    return a+b;
} 

console.log(add(1,2));
console.log(adding(1,2));
/*
function empty(){
    return ""
} // normal way needs to hav function keyword

 / when { } there add return keyword
const empty1 = () =>""

const greet = name =>`Hello ${name}`;
*/
let a=10;
console.log(a);
const fun= () =>{
    let a=11;
    if(true){
        let a=12;
        console.log(a);
    }
    console.log(a);
}
fun();

const hi = () =>{
    if(true){
        var message = "Hello";
    }
    console.log(message);
}

//Hoist: block -> local -> global

//REST & SPREAD Operators
const add3 = (a,b,c) =>{
    return a+b+c;
}
add3(1,2,3)  // instead of this use REST operator
const add4 =(...args) =>{
    let sum=0;
}
 add4(1,2,3,4)

 console.log("Glee">"Glow"); //false