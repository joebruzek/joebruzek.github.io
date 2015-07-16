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
    if (elements.innerHTML.substring(0, 4) == "Dark") {
        elements.innerHTML = "Light Theme";
    } else {
        elements.innerHTML = "Dark Theme";
    }

    elements = document.getElementsByClassName("indicator");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("white");
        element.classList.toggle("amber");
    }

};

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
};

aClient = new HttpClient();
aClient.get('http://joebruzek.com/json_sample.json', function(response) {
    console.log("Testing out grabbing data from a server hosted JSON file");
    console.log(response);
    console.log("I'll probably load all the content this way");
});