var X = 15; //Global variable function
function numbers_function1 () {
    document.getElementById("Add").innerHTML= ( 55 + X + "<br>");
}
function numbers_function2 () {
    document.getElementById("add").innerHTML= (X + 5 );
}
numbers_function1();
numbers_function2();



function adding_numbers1 () { //local variable function
    var Y = 5;
    document.getElementById("Counting").innerHTML= (10 + Y + "<br>");
}
function adding_numbers2 () {
    document.getElementById("Count").innerHTML= (Y + 50 + "<br>");
}
adding_numbers1();
adding_numbers2();


function adding_numbers11 () { //local variable function. Console, where variable is not defined
    var A = 5;
    console.log(10 + A);
}
function adding_numbers22 () {
    console.log(A + 50);
    }
adding_numbers1();
adding_numbers2();


function get_Date() { //if statement, if the time is greater than 11, hello there will show
    if (new Date().getHours() <23) {
    document.getElementById("Hi").innerHTML = "Hello there!";   
    }
}

function if_statement() { //IF/else STATEMENT. ASK USER TO INPUT AGE
    var Y =document.getElementById("age_number").value;
    if (Y > 18)
    document.getElementById("old").innerHTML = "You are eligible! Please see representative to inquire";
    else
    document.getElementById("old").innerHTML = "Sorry, you are not eligible yet.";
}

function Time_function () { //else if statements, checking the time
    var Time = new Date().getHours();
    var Reply;
    if (Time <12 == Time >0){
            Reply = "It is morning time";
    }
    else if (Time >12 == Time <18) {
            Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
