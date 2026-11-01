$(document).ready(function () {
  var start = { left: 0, top: 0, width: 60, height: 60, opacity: 1 };

  $("#start8").click(function () {
    $("#box8").animate({ width: 120, height: 120, left: 300 }, 1000);
  });

  $("#start9").click(function () {
    $("#box9")
      .animate({ left: 300 }, 800)
      .animate({ top: 180 }, 800)
      .animate({ width: 30, height: 30 }, 600)
      .animate({ left: 0, top: 0, width: 60, height: 60 }, 800);
  });

  $("#start10").click(function () {
    $("#box10").animate({
      opacity: 0.4,
      width: 150,
      height: 150,
      left: 300,
      top: 100
    }, 1500);
  });

  // Reset buttons (so the animations can be run again)
  $("#reset8").click(function () { $("#box8").stop(true).css(start); });
  $("#reset9").click(function () { $("#box9").stop(true).css(start); });
  $("#reset10").click(function () { $("#box10").stop(true).css(start); });
});