/**
 * Theme.js
 *
 * This is the code for switching themes within joebruzek.com
 *
 * as of 7/19/2015 only light and dark themes are supported
 */
define(function(require) {
    var currentTheme = "light";

    function updateCurrentTheme() {
        if (currentTheme === "light") {
            currentTheme = "dark";
        } else {
            currentTheme = "light";
        }
    };

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

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

    return {
        toggleTheme: function() {
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
            updateCurrentTheme();
            insertParam("theme", currentTheme);
        },

        initTheme: function() {
            if (getParameterByName("theme") === "dark") {
                //this.toggleTheme();
            }
        }
    };
});