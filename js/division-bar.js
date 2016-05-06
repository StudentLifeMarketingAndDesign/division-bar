$(document).ready(function() {

    // Hide the directory navigation
    // $('.division-directory').hide();


    // Show/Hide the directory navigation on-click
    $('.directory-toggle').click(function() {
        $(this).toggleClass("active");
        $('.division-directory').toggleClass("active")
        if ($(this).getAttribute('aria-expanded') == 'true'){
            $(this).setAttribute('aria-expanded', 'false');
        }
        else {
            $(this).setAttribute('aria-expanded', 'true');
        }
        return false;
    });


    // For small screens - show/hide the search on-click
    $('.search-toggle').click(function() {
        $(this).toggleClass('active');
        $('.division-search').slideToggle();
        if ($(this).getAttribute('aria-expanded') == 'true'){
            $(this).setAttribute('aria-expanded', 'false');
        }
        else {
            $(this).setAttribute('aria-expanded', 'true');
        }
        return false;
    });


    // For small screens - show the directory
    $('.division-menu').on('click', '.has-subnav a', function() {
        $(this).next().slideToggle('slow');
        $(this).toggleClass('active');
        if ($(this).getAttribute('aria-hidden') == 'true'){
            $(this).setAttribute('aria-hidden', 'false');
        }
        else {
            $(this).setAttribute('aria-hidden', 'true');
        }
    });

});