function concat_function () { //this function is to concatenate a sentence
    var A ="This page is ";
    var B = " for practice only.";
    var C = " We are practicing "
    var D = "Concat method at the moment.";
    var whole_sentence = A.concat(B,C,D);
    document.getElementById("Concat").innerHTML = whole_sentence;
}

function slice_method () { //slice method first number is the start and 2nd is the end. the sliced words will be displayed
    var Sentence = "This page is for practice only.";
    var Section = Sentence.slice(12,25);
    document.getElementById("Slice").innerHTML = Section;
}

function string_method () {
    var A = 1016;
    document.getElementById("NumbersString").innerHTML = A.toString();
}

function toPrecision_method () { //will round the number up to specified length
    var M = 484968428552.499496005594;
    document.getElementById("Precision").innerHTML = M.toPrecision(18);
}