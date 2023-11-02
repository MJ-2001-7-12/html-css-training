/*
let code = prompt("Enter code");
switch(code){
    case '#FF0000':
        console.log("RED")
        break;
    case '#FFFF00':
        console.log("YELLOW")
        break;
    default:
        console.log("GREEN")
        break;
}


let hour_railway=14;
let weekend=false;
if(hour_railway<9 || hour_railway>20 || weekend)
{
    document.write("Closed")
}
else{
    document.write("Open")
}

 let i=0
 while(i<10){
    console.log(i);
    i++;
 }


 let count=0;
 let currentRoll
 while(currentRoll!=6)
 {
    currentRoll = Math.floor(Math.random()*6) +1;
    count++;
 }
 console.log(count);
*/

let n=Math.floor(Math.random()*10)+1
 do{
    if(n%2==0)
    {
        n=n/2
    }
    else{
        n=(n*3)+1
    }
    console.log(n)
 }while(n!=1)


