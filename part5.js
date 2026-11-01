$(document).ready(function () {
  // Thumbnails fade in
  $(".gallery img").hide().fadeIn(800);

  // Fade out on hover, fade back in on leave
  $(".gallery img").hover(
    function () { $(this).fadeTo(200, 0.5); },
    function () { $(this).fadeTo(200, 1); }
  );

  // Click: show enlarged image
  $(".gallery img").click(function () {
    $("#big").attr("src", $(this).data("full")).css("width", "250px");
    $("#lightbox").css("display", "flex").hide().fadeIn(300);
    $("#big").animate({ width: "800px" }, 400);
  });

  // Click on the dark background: close
  $("#lightbox").click(function () {
    $(this).fadeOut(300);
  });
});