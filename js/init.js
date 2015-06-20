(function($) {
    $(function() {

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

function toggleDark() {
    var elements = document.getElementsByClassName('dark');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("teal");
        element.classList.toggle("darken-3");
        element.classList.toggle("white-text");
    }
    elements = document.getElementsByClassName('dark1');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("grey");
        element.classList.toggle("darken-4");
        element.classList.toggle("white-text");
    }

    elements = document.getElementsByClassName('dark2');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("grey");
        element.classList.toggle("darken-3");
        element.classList.toggle("white-text");
    }

    elements = document.getElementsByClassName('dark3');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("black");
        element.classList.toggle("white-text");
    }

    elements = document.getElementById("dark-toggle-item");
    console.log(elements);
    console.log(elements.innerHTML);
    if (elements.innerHTML.substring(0, 4) == "Dark") {
        elements.innerHTML = "Light Theme";
    } else {
        elements.innerHTML = "Dark Theme";
    }
}