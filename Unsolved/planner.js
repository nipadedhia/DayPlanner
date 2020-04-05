// display date and time on header
$(document).ready(function () {
  var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(currentDate);
  // console.log(currentDate);
  // date();

  // variable taskArea created for textarea tag
  var taskArea = $("<textarea>");

  //adding class to textarea
  taskArea.addClass("textarea present col-md-12");
  taskArea.attr("name", "Test");

  // variable saveBtn created for button tag
  var saveBtnEl = $("<button>");

  //adding classes to save button
  saveBtnEl.addClass("saveBtn");
  saveBtnEl.attr("label", "save");

  //display task area
  $("#task").append(taskArea, saveBtnEl);
});
