$(document).ready(function () {
  // Task 5
  var n = 2;

  $("#add").click(function () {
    n++;
    $("#list").append("<li>Item " + n + "</li>");
  });

  $("#addFirst").click(function () {
    n++;
    $("#list").prepend("<li>Item " + n + "</li>");
  });

  $("#remove").click(function () {
    $("#list li:last").remove();
  });

  // Task 6
  $("#changeSrc").click(function () {
    $("#img").attr("src", "67.avif");
  });

  $("#changeHref").click(function () {
    $("#link").attr("href", "https://du.astanait.edu.kz/").text("DU astanait");
  });

  // Task 7
  $("#name").on("input", function () {
    $("#outName").text($(this).val());
  });

  $("#email").on("input", function () {
    $("#outEmail").text($(this).val());
  });
});