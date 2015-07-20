(function($) {
    $(function() {

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

$.get('http://joebruzek.com/json_sample.json').then(function(j) {
    console.log(j);
}, function(err) {
    console.log(err);
});