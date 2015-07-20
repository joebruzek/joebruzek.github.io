define(function(require) {
    var $ = require("jquery");
    var theme = require("theme");

    // requirejs(["materialize"], function(materialize) {
    //     $('.button-collapse').sideNav();
    // });

    //theme.initTheme();

    $("#theme-link").click(function() {
        theme.toggleTheme();
    });
});