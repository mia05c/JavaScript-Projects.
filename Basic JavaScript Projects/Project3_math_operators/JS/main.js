function addition_Function () {
    var Addition = 10 + 10;
    document.getElementById("Math").innerHTML="10 + 10 = " + Addition;
}

function subtraction_Function () {
    var Subtraction = 100 - 10;
    document.getElementById("Math").innerHTML="100 - 10 = " + Subtraction;
}

function multiplication_Function () {
    var Multiplication = 8 * 10;
    document.getElementById("Math").innerHTML="8 * 10 = " + Multiplication;
}

function division_Function () {
    var Division = 100 / 10;
    document.getElementById("Math").innerHTML="100 / 10 = " + Division;
}

function multiple_operations () {
    var Multiple = (5+5) * 1 / 2 - 2;
    document.getElementById("Math").innerHTML ="5 plus 5, multiplied by 1, divided in half and then subtracted by 2 equals " + Multiple;
}

function modulus_operations () {
    var remainder = 5 % 3;
    document.getElementById("Math").innerHTML ="The remainder of 5 divided by 3 is  " + remainder;
}

function negation_operator () {
    var x = 5;
    document.getElementById("Math").innerHTML = -x;
}

function increment_Operator () {
    var X = 150;
    X++;
    document.write(X);
}

function decrement_Operator () {
    var X = 150;
    X--;
    document.write(X);
}


function random_Operator () { //This operation is made for getting a random number whenever the user clicks the mouse.
    document.getElementById("Math").innerHTML =
    Math.floor(Math.random() * 11);
}

function rounding_numbers () {
    document.getElementById("Math").innerHTML = Math.round(4.6);
}