function dictionary_Words () {
    var Words= {
        HTML: "Hypertext Markup Language",
        JS: "JavaScript",
    };
    delete Words.HTML //deleted the value of HTML
    document.getElementById("Dictionary").innerHTML = Words.HTML;
}
