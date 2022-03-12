function Ride_Function () { 
    var Height, Can_ride;
    Height = document.getElementById ("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () { //this fucntion will create a sentence, the datas will becoming from the var from above.
    document.getElementById ("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


function newkeyword_functionn () { //this functions gets the variable from above function (vehicle)
    document.getElementById ("New_and_This").innerHTML =
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year
}

function count_function () { //nested function, a function within a function.
    document.getElementById ("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 9;
        function Plus_one() {starting_point += 1;}
        Plus_one();
        return starting_point;
    }
}