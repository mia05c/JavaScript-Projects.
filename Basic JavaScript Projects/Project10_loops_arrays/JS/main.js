function Call_Loop () { //this function will count from zero to 15
    var Digit = ""; 
    var X = 0;
    while (X < 16) {
        Digit += "<br>" + X;
        X ++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //array function, may chose different variable numbers to construct a sentences
    var cities_words = [];
    cities_words [0] = "London";
    cities_words [1] = "Paris";
    cities_words [2] = "Frankfurt";
    document.getElementById("Array").innerHTML = "There are a lot of beautiful cities in Europe like " + cities_words [2] + " and " + cities_words [0] + "!";
}

function constant_function () { 
    const Cars = {type: "Civic: Hatchback", brand: "Honda", color: "White"};
    Cars.color = "red";
    Cars.price = "$28,000.00";
    document.getElementById("Constant").innerHTML = "The " + Cars.type + " will cost " + Cars.price; 
}


function let_function () {
    var Z = 82;
    document.getElementById("Var").innerHTML = Z;
    {
    let Z = 10;
    document.getElementById("Var").innerHTML = Z;
    }
}

function function_Let () { //let function with objects
    let Student = {
        Name: "Mia",
        Course: "JavaScript",
        Module: "Module 3:Writing Code in JavaScript.",
        description: function () {
            return "The student named " + this.Name + " is currently studying " + this.Course + " and finisihing up " + this.Module;
        }
    }
    document.getElementById("function_Let").innerHTML = Student.description();
};