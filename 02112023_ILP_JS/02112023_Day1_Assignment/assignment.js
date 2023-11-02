

for(let i=1;i<=20;i++)
{
    if(i%2==0)
    {
        continue;
    }
    else if(i%3==0)
    {
        console.log("Number is divisible by 3")
    }
    else if(i%5==0)
    {
        console.log("Number is divisible by 5")
    }
    else if(i%5==0&&i%3==0)
    {
        break;
    }
}


console.log("a">"A");
/*

JavaScript uses character encoding to determine the order of characters in string comparisons. 
According, to Unicode standard, the lowercase letters come after their 
corresponding uppercase letters. 
So, the Unicode value of "a" is greater than the Unicode value of "A," 
and that's why console.log("a" > "A") evaluates to true
The Unicode value for "A" is U+0041 and "a" is U+0061.

calculator - switch , loop , operators */



// Arrow functions for basic arithmetic operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Division by zero is not allowed." : a / b);

// Main calculator function using arrow functions
const calculate = (a, operator, b) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Invalid operator";
    }
};

// Loop to perform calculations until the user decides to exit
let continueCalculating = true;

while (continueCalculating) {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const operator = prompt("Enter the operator (+, -, *, /):");
    const num2 = parseFloat(prompt("Enter the second number:"));

    const result = calculate(num1, operator, num2);

    console.log(`Result: ${result}`);

    const userInput = prompt("Do you want to continue (yes/no)?");
    continueCalculating = userInput.toLowerCase() === 'yes';
}
