

function toggleDark() {
    var elements = document.getElementsByClassName('dark');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("teal");
        element.classList.toggle("darken-2");
    }
    elements = document.getElementsByClassName('dark1');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("blue-grey");
        element.classList.toggle("darken-4");
    }

    elements = document.getElementsByClassName('dark2');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("blue-grey");
        element.classList.toggle("darken-2");
    }

    elements = document.getElementsByClassName('darktext');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.style.color == "white") {
            element.style.color = "black";
        } else {
            element.style.color = "white";
        }
    }

    elements = document.getElementById("dark-toggle-item");
    if (elements.innerHTML.substring(0, 4) == "Dark") {
        elements.innerHTML = "Light Theme";
    } else {
        elements.innerHTML = "Dark Theme";
    }
}