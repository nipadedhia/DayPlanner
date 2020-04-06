// display date and time on header
$(document).ready(function () {
  var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(currentDate);
  // console.log(currentDate);
  // date();

  // variable taskArea created for textarea tag
  var taskArea = $("<textarea>");

  //adding class to textarea
  // taskArea.addClass("textarea present col-md-9");
  // taskArea.attr("name", "Test");

  // variable saveBtn created for button tag
  var saveBtnEl = $("<button>");

  //adding classes to save button
  // saveBtnEl.addClass("saveBtn");
  // saveBtnEl.attr("label", "save");

  //display task area

  for (var i = 1; i < 14; i++) {
    var timeDisplay = $("<p>");
    timeDisplay.addClass("hour col-md-2");

    var taskArea = $("<textarea>");
    taskArea.addClass("textarea description present col-md-9");
    taskArea.attr("name", "Test");

    var saveBtnEl = $("<button>");
    saveBtnEl.addClass("saveBtn saveBtn i:hover col-md-1");
    saveBtnEl.attr("label", "save");

    $("#task").append(timeDisplay, taskArea, saveBtnEl);
  }
});

var timeDifference = m.startOf("day").format();
console.log(timeDifference);
