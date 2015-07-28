// //Initialize the side nav using materialize
// (function($) {
//     $(function() {

//         $('.button-collapse').sideNav();

//     }); // end of document ready
// })(jQuery); // end of jQuery name space

//when the window loads, initialize the theme
window.onload = function() {
    initTheme();
    $('.button-collapse').sideNav();
};

//link to a new page keeping the current theme
function linkTo(destination) {
    if (hasParam("theme")) {
        window.open(destination + ".html?theme=" + getParameterByName("theme"), "_self");
    }
};

var currentTheme = "light";

//update the currentTheme variable based on the url parameter
function updateCurrentTheme() {
    if (getParameterByName("theme") === "dark") {
        currentTheme = "light";
    } else {
        currentTheme = "dark";
    }
};

//get a url parameter by name
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

//check to see if a url parameter exists
function hasParam(field) {
    var url = window.location.href;
    if (url.indexOf('?' + field + '=') != -1) {
        return true;
    } else if (url.indexOf('&' + field + '=') != -1) {
        return true;
    }
    return false
}

//insert or update a url parameter
function insertParam(key, value) {
    key = escape(key);
    value = escape(value);

    var kvp = document.location.search.substr(1).split('&');
    if (kvp == '') {
        document.location.search = '?' + key + '=' + value;
    } else {

        var i = kvp.length;
        var x;
        while (i--) {
            x = kvp[i].split('=');

            if (x[0] == key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }

        if (i < 0) {
            kvp[kvp.length] = [key, value].join('=');
        }

        //this will reload the page, it's likely better to store this until finished
        document.location.search = kvp.join('&');
    }
};

function updateIcons() {
    console.log(currentTheme);
    $("img.connect").map(function(i, image) {
        var path = $(image).attr("src");
        console.log(i + " : " + path);
        if (currentTheme === "light") {
            path = path.replace("black", "white");
        } else {
            path = path.replace("white", "black");
        }
        
        $(image).attr("src", path);
    })
}

//Toggle the theme. Param: reload, whether or not to reaload, updating the url
function toggleTheme(reload) {
    updateCurrentTheme();

    if (reload) {
        insertParam("theme", currentTheme);
        return;
    }

    var elements = document.getElementsByClassName('dark');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("deep-purple");
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

    elements = document.getElementsByClassName("dark-toggle-item");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].innerHTML.substring(0, 4) == "Dark") {
            elements[i].innerHTML = "Light Theme";
        } else {
            elements[i].innerHTML = "Dark Theme";
        }
    }

    elements = document.getElementsByClassName("link-text");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("white-text");
    }

    elements = document.getElementsByClassName("indicator");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("white");
        element.classList.toggle("amber");
    }

    elements = document.getElementsByClassName("color-link");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("app-link");
        element.classList.toggle("app-link-dark");
    }

    elements = document.getElementsByClassName("dark-accent");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("accent-text");
    }

    elements = document.getElementById("titlecard");
    if (elements) {
        elements.classList.toggle("clouds");
        elements.classList.toggle("dark-clouds");
    }

    updateIcons();
};

//initialize the theme based on the url param
function initTheme() {
    if (hasParam("theme") && getParameterByName("theme") === "dark") {
        this.toggleTheme(false);
    }
};