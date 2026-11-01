$(document).ready(function () {
  // Task 0
  console.log("jQuery is ready!");

  // Task 1
  $("#btn-text").click(function () {
    $("#title").text("Changed with .text()");
  });

  $("#btn-html").click(function () {
    $(".note").html("Changed with <b>.html()</b>");
  });

  $("#btn-css").click(function () {
    $("p").css("color", "red");
  });
});