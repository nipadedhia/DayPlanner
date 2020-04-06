// display date and time on header
$(document).ready(function () {
  var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
  $("#currentDay").text(currentDate);

  // variable taskArea created for textarea tag
  var taskArea = $("<textarea>");

  //display time for task area
  var startTime = moment("8 am", "h a").format("h a");

  //Displays time slots
  for (var i = 1; i < 14; i++) {
    var timeDisplay = $("<p>");
    timeDisplay.addClass("hour col-md-2");
    timeDisplay.append(startTime);
    startTime = moment(startTime, "h a").add(1, "hour").format("h a");

    var taskArea = $("<textarea>");
    taskArea.addClass("textarea row present col-md-9");
    taskArea.attr("name", "Test");

    var saveBtnEl = $("<button>");
    saveBtnEl.addClass("saveBtn col-md-1 fa fa-save");
    saveBtnEl.attr("data-letter", "save");

    $("#task").append(timeDisplay, taskArea, saveBtnEl, "<br>");

    var time = [
      "8 am",
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
      "7pm",
    ];
    updateTime();

    function updateTime() {
      var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
      for (var time = 0; time < time.length; i++) {
        if (time > currentDate) {
          $("#task").addClass("future");
        } else if (time < currentDate) {
          $("#task").addClass("past");
        } else if (time == currentDate) {
          $("#task").addClass("present");
        }
      }
    }
  }
});
