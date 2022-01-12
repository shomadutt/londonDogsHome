$(window).on("load", function () {
    // Prevents Ajax requests from being cached in the browser
    $.ajaxSetup({ cache: false });
  
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });


$(document).ready(function () {
    $(".navbar-nav>li>a").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
});