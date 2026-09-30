// 1. Simple Calculator

function runCalculator() {
    let a = 20;
    let b = 10;
    let operator = "+";
    let result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    } else {
        result = "Invalid operator";
    }

    document.getElementById("output").innerHTML =
        "Calculator Result: " + result;
}


// 2. Even or Odd

function checkEvenOdd() {
    let number = 15;

    if (number % 2 === 0) {
        document.getElementById("output").innerHTML =
            number + " is Even";
    } else {
        document.getElementById("output").innerHTML =
            number + " is Odd";
    }
}


// 3. Print Numbers Using Loop

function printNumbers() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += i + "<br>";
    }

    document.getElementById("output").innerHTML =
        "Numbers from 1 to 10:<br>" + result;
}


// 4. Function to Find Square

function findSquare() {
    let number = 5;

    function square(num) {
        return num * num;
    }

    document.getElementById("output").innerHTML =
        "Square of " + number + " = " + square(number);
}


// 5. Find Largest Number

function findLargest() {
    let a = 25;
    let b = 40;
    let c = 30;
    let largest;

    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    document.getElementById("output").innerHTML =
        "Largest Number: " + largest;
}

