$(document).ready(function () {
  // Task 2
  $("#hide").click(function () { $("#text").hide(); });
  $("#show").click(function () { $("#text").show(); });
  $("#toggle").click(function () { $("#text").toggle(); });

  // Task 3
  $("#fadeIn").click(function () { $("#img").fadeIn(); });
  $("#fadeOut").click(function () { $("#img").fadeOut(); });
  $("#fadeToggle").click(function () { $("#img").fadeToggle(); });

  // Task 4
  $("#slideUp").click(function () { $("#panel").slideUp(); });
  $("#slideDown").click(function () { $("#panel").slideDown(); });
  $("#slideToggle").click(function () { $("#panel").slideToggle(); });
});