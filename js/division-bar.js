$(document).ready(function() {

    // Hide the directory navigation
    // $('.division-directory').hide();


    // Show/Hide the directory navigation on-click
    $('.directory-toggle').click(function() {
        $(this).toggleClass("active");
        $('.division-directory').toggleClass("active");

        var state = $(this).attr('aria-expanded') == 'false' ? true : false;
        var stateHidden = $(this).attr('aria-hidden') == 'false' ? true : false;

        $(this).attr('aria-expanded', state);
        $(this).attr('aria-hidden', stateHidden);

        return false;
    });


    // For small screens - show/hide the search on-click
    $('.search-toggle').click(function() {
        $(this).toggleClass('active');
        $('.division-search').slideToggle();

        var state = $(this).attr('aria-expanded') == 'false' ? true : false;
        var stateHidden = $(this).attr('aria-hidden') == 'false' ? true : false;

        $(this).attr('aria-expanded', state);
        $(this).attr('aria-hidden', stateHidden);

        return false;
    });


    // For small screens - show the directory
    $('.division-menu').on('click', '.has-subnav a', function() {
        $(this).next().slideToggle('slow');
        $(this).toggleClass('active');

        var state = $(this).attr('aria-expanded') == 'false' ? true : false;
        var stateHidden = $(this).attr('aria-hidden') == 'false' ? true : false;
        
        $(this).attr('aria-expanded', state);
        $(this).attr('aria-hidden', stateHidden);



    });

});