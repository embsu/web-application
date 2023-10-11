// Get the current page URL
var currentPageUrl = window.location.href;

// Iterate through the navigation links and add the "current" class to the matching link
$('.navbarlinkit a').each(function() {
    if (this.href === currentPageUrl) {
        $(this).addClass('current');
    }
});