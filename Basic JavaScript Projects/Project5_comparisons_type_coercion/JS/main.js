
function my_functionn () { //this functon identifies which data type is used.
    document.getElementById("type").innerHTML = typeof("Hello");
}


function my_function () { //Identifying whether or not the value given is Infinity
    document.getElementById("Number").innerHTML = (2E310);
}

function my_Function () {
    document.getElementById("Numberx").innerHTML = (-3E310);
}

function boolean_function () { //will tell the user if the value is false or true.
    document.getElementById("Boolean").innerHTML = Boolean (55>6);
}

console.log ("Hello, Thank you for visiting this site!"); //this value will show up when the user opens the console panel.

function coercion_function () {
    document.getElementById("Coercion").innerHTML = ("10" + 5);
}

function double_function () { //functon that compares the left and right data, will say true/false
    document.getElementById("Double").innerHTML = (50 == 15);
}

function triple_function () {
    X = 100;
    Y = 180;
    document.getElementById("triple").innerHTML = (X === Y);
}

function tripl_function () {
    X = 100;
    Y = 100;
    document.getElementById("tripl").innerHTML = (X === Y);
}

function data_function () { //this will return False, tho they are the same value, they have different data types. other is number and the other one is string
    X = 100; 
    Y = "100";
    document.getElementById("data").innerHTML = (X === Y);
}


function false_function () {
    X = "Hello";
    Y = "Mia";
    document.getElementById("false").innerHTML = (X === Y);
}

function and_function () { //this function is use to utilize whether the statement are both true or not
    document.getElementById("and").innerHTML = 5 > 2 && 1000 > 1;
}

function falseand_function () { //false statement of the AND operator
    document.getElementById("falseand").innerHTML = 5 > 55 && 1000 > 1;
}

function or_function () { //true statement of the OR operator. 1 statement is correct.
    document.getElementById("or").innerHTML = 5 > 55 || 1000 > 1;
}

function falseor_function () { //false statement of the OR operator. 1 statement is correct.
    document.getElementById("falseor").innerHTML = 5 > 55 || 100 > 194916;
}

function not_function () { // false statement of NOT Operator function
    document.getElementById("not").innerHTML = !( 4556 > 45);
}

function truenot_function () { // false statement of NOT Operator function
    document.getElementById("truenot").innerHTML = !( 4556 < 45);
}